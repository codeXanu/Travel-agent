export default async function fetchData(userInputs) {
  const body = JSON.stringify({ input: userInputs });

  try {
    // 🔁 Run both API calls in parallel
    const [res1, res2] = await Promise.all([
      fetch("https://travel-agent-zyca3.ondigitalocean.app/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      }),
      fetch("https://travel-agent-zyca3.ondigitalocean.app/api/details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      }),
    ]);

    // 🔍 Check both responses
    if (!res1.ok || !res2.ok) {
      throw new Error("One or both API responses failed.");
    }

    // ⏬ Parse JSON for both
    const data1 = await res1.json();
    const data2 = await res2.json();

    // ✅ Ensure both are successful
    if (data1.success && data2.success) {
      return {
        success: true,
        data1: data1,
        data2: data2,
      };
    } else {
      return {
        success: false,
        data1: data1 || null,
        data2: data2 || null,
        error: "One of the APIs returned an error",
      };
    }
  } catch (error) {
    console.error("❌ Error submitting data:", error.message);

    return {
      success: false,
      data1: null,
      data2: null,
      error: error.message,
    };
  }
}

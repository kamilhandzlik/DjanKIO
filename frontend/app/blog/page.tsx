import Wokanda from "../components/wokanda/wokanda";

const BlogPage = () => {
  return (
    <>
      <div className="text-left mb-8">
        <h1 className="text-3xl font-semibold text-black">
          <span className="text-orange-500">Blog</span> – zamówienia publiczne,
          zmiany w prawie, nowinki w SzuKIO
        </h1>
      </div>

      <div className="space-y-8">
        <div className="pl-6 border-l-4 border-orange-500">
          <h2 className="text-orange-500 text-lg font-semibold mb-1">
            Progi unijne i ich równowartości w złotych obowiązujące od 1
            stycznia 2026 r.
          </h2>

          <p className="text-gray-500 text-sm mb-2">
            2025-11-10 – Ilona Zalewska – prawnik, konsultant ds. zamówień
            publicznych.
          </p>

          <p className="text-black text-base">
            Nowe progi unijne i ich równowartości w złotych będą obowiązywały od
            1 stycznia 2026 r.
          </p>
        </div>
      </div>
      <Wokanda />
    </>
  );
};

export default BlogPage;

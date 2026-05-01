import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(135deg, #ffffff 0%, #edf9f1 40%, #dff4e7 100%)",
          color: "#102519",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 700 }}>YANGISU.</div>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              border: "2px solid #2f9e5b",
              borderRadius: 999,
              padding: "8px 18px",
              fontSize: 20,
              fontWeight: 600,
              color: "#14693d",
              background: "#f7fff9",
            }}
          >
            AI Engineer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>
            양이수 (Isu Yang)
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, color: "#245840" }}>
            LLM Systems, AI Automation, Product Engineering
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 24, color: "#315d49" }}>
            portfolio-tau-black-70.vercel.app
          </div>
          <div
            style={{
              display: "flex",
              gap: 8,
            }}
          >
            {[
              "Python",
              "TypeScript",
              "OpenAI API",
              "RAG",
            ].map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid #58aa79",
                  borderRadius: 999,
                  padding: "8px 14px",
                  fontSize: 18,
                  color: "#1a5a38",
                  background: "#ecfbf1",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

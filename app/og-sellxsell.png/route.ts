import { createElement } from "react";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
    return new ImageResponse(
        createElement(
            "div",
            {
                style: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#000000",
                    color: "#ffffff",
                    fontFamily: "Arial, sans-serif",
                    position: "relative",
                    overflow: "hidden",
                },
            },
            createElement("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle at 76% 22%, rgba(127, 119, 221, 0.34), transparent 38%), linear-gradient(180deg, #05070d 0%, #000000 100%)",
                },
            }),
            createElement(
                "div",
                {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 28,
                        position: "relative",
                    },
                },
                createElement(
                    "div",
                    {
                        style: {
                            fontSize: 94,
                            fontWeight: 900,
                            letterSpacing: -4,
                        },
                    },
                    "SELLXSELL",
                ),
                createElement("div", {
                    style: {
                        width: 360,
                        height: 8,
                        background: "#7F77DD",
                    },
                }),
                createElement(
                    "div",
                    {
                        style: {
                            fontSize: 34,
                            color: "#d5d8e2",
                        },
                    },
                    "Revenue inspection for defensible forecasts",
                ),
            ),
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}

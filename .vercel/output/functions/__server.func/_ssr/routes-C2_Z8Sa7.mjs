import { o as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useMediaUrls, g as useLetter, h as useGifts, m as useCategories, p as useBouquet, v as usePhotos, y as useSettings } from "./media-okdLHHoQ.mjs";
import { C as ChevronLeft, S as ChevronRight, T as Calendar, _ as Flame, b as Compass, c as MapPin, d as Layers, g as Flower2, h as Gift, i as Shield, m as Grid3x3, o as RefreshCw, p as Heart, r as Sparkles, s as Package, t as X, w as Camera, x as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C2_Z8Sa7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Warm vignette + film grain overlay that sits above the page background. */
function Atmosphere({ bright = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-0",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 transition-opacity duration-1000",
				style: {
					background: "var(--gradient-warmlight)",
					opacity: bright ? 1 : .55
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.5]",
				style: { background: "radial-gradient(ellipse at center, transparent 45%, oklch(0.265 0.032 47 / 0.22) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.06] mix-blend-multiply",
				style: {
					backgroundImage: "radial-gradient(oklch(0.2 0.03 47) 0.5px, transparent 0.6px), radial-gradient(oklch(0.2 0.03 47) 0.5px, transparent 0.6px)",
					backgroundSize: "3px 3px, 5px 5px",
					backgroundPosition: "0 0, 2px 1px"
				}
			})
		]
	});
}
/** Delicate botanical line drawings used sparingly across the experience. */
function SprigLine({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 220 60",
		fill: "none",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 30c40 0 70-16 106-16s72 16 106 16",
				stroke: "currentColor",
				strokeWidth: "0.8",
				strokeLinecap: "round"
			}),
			[
				36,
				62,
				88,
				132,
				158,
				184
			].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M${x} ${i % 2 ? 30 : 26}c6-10 16-12 22-8-4 8-14 12-22 8z`,
				stroke: "currentColor",
				strokeWidth: "0.8",
				fill: "none",
				transform: i % 2 ? `rotate(180 ${x} 30)` : void 0
			}, x)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "110",
				cy: "14",
				r: "3.4",
				stroke: "currentColor",
				strokeWidth: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "110",
				cy: "14",
				r: "1",
				fill: "currentColor",
				opacity: "0.6"
			})
		]
	});
}
function Daisy({ className = "", petals = 8 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 60 60",
		fill: "none",
		className,
		"aria-hidden": "true",
		children: [Array.from({ length: petals }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "30",
			cy: "16",
			rx: "5",
			ry: "11",
			stroke: "currentColor",
			strokeWidth: "0.9",
			transform: `rotate(${360 / petals * i} 30 30)`
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "30",
			cy: "30",
			r: "4.5",
			fill: "currentColor",
			opacity: "0.35"
		})]
	});
}
function LeafBranch({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 200",
		fill: "none",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M60 198C60 140 54 80 40 4",
			stroke: "currentColor",
			strokeWidth: "1",
			strokeLinecap: "round"
		}), Array.from({ length: 7 }).map((_, i) => {
			const y = 30 + i * 22;
			const dir = i % 2 ? 1 : -1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M${58 - i} ${y}c${dir * 22} -14 ${dir * 34} -4 ${dir * 36} 6-${dir * 20} 8-${dir * 30} 4-${dir * 36} -6z`,
				stroke: "currentColor",
				strokeWidth: "0.9",
				fill: "none"
			}, i);
		})]
	});
}
function Opening({ heading, message, buttonText, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: {
			opacity: 0,
			scale: 1.06,
			filter: "blur(6px)"
		},
		transition: {
			duration: .9,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeafBranch, { className: "pointer-events-none absolute -left-6 top-6 h-48 w-28 text-sage/45 sm:h-72 sm:w-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeafBranch, { className: "pointer-events-none absolute -right-6 bottom-6 h-48 w-28 -scale-x-100 text-sage/40 sm:h-72 sm:w-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 14
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .3,
					duration: 1
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Daisy, { className: "mx-auto mb-8 h-10 w-10 text-taupe/70" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
				initial: {
					opacity: 0,
					y: 18
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .5,
					duration: 1.1,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "text-5xl leading-tight text-cocoa sm:text-6xl",
				children: heading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 14
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: 1.1,
					duration: 1.1
				},
				className: "mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-walnut/85",
				children: message
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.8,
					duration: 1
				},
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onOpen,
					className: "group relative inline-flex items-center gap-2 rounded-full border border-walnut/30 bg-cream/70 px-8 py-3 text-2xl text-cocoa shadow-paper transition-all duration-500 hover:-translate-y-0.5 hover:border-walnut/60 hover:bg-beige/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hand",
						children: buttonText
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hand transition-transform duration-500 group-hover:translate-x-1",
						children: "→"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 2.2,
					duration: 1.2
				},
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SprigLine, { className: "h-8 w-52 text-taupe/60" })
			})
		]
	}, "opening");
}
/**
* Physical 3D vector-styled objects that sit inside the gift box.
* Custom styled to match the warm chocolate aesthetic in reference Image 1.
*/
function AlbumObject() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-24 w-20 sm:h-32 sm:w-26 group-hover:scale-105 transition-transform duration-300",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-1 right-0 w-3 rounded-r-[3px] bg-cream shadow-[inset_-2px_0_4px_rgba(0,0,0,0.15)] border-y border-r border-walnut/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-texture absolute inset-y-0 left-0 right-1.5 rounded-l-[5px] rounded-r-[3px] bg-cocoa shadow-object border border-gold/30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[6px] rounded-[3px] border border-gold/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-0 bottom-0 w-3 rounded-l-[5px] bg-walnut/80 border-r border-gold/30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 m-auto flex h-7 w-7 items-center justify-center rounded-full border border-gold/70 bg-walnut/90 shadow-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full border border-gold/80 bg-cream/20" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1 right-2 h-2 w-2 border-t border-r border-gold/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-1 right-2 h-2 w-2 border-b border-r border-gold/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-1.5 left-4 h-3.5 w-10 -rotate-3 bg-cream/70 opacity-80 backdrop-blur-xs border border-walnut/20" })
			]
		})]
	});
}
function LetterObject() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-20 w-28 rotate-[3deg] sm:h-24 sm:w-36 group-hover:scale-105 transition-transform duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "card-texture absolute inset-0 rounded-[4px] bg-cream border border-walnut/25 shadow-object" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 144 96",
				className: "absolute inset-0 h-full w-full text-walnut/40",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M0 0l72 54L144 0",
						stroke: "currentColor",
						strokeWidth: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M0 96l50-38",
						stroke: "currentColor",
						strokeWidth: "1",
						strokeDasharray: "3 3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M144 96l-50-38",
						stroke: "currentColor",
						strokeWidth: "1",
						strokeDasharray: "3 3"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-[45%] flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rose shadow-md ring-2 ring-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3.5 w-3.5 rounded-full border border-cream/70 bg-cream/30" })
			})
		]
	});
}
function BouquetObject() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative h-28 w-24 sm:h-36 sm:w-32 group-hover:scale-105 transition-transform duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 120 140",
			className: "h-full w-full drop-shadow-[0_12px_20px_rgba(67,40,24,0.35)]",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					stroke: "oklch(0.55 0.04 133)",
					strokeWidth: "2",
					strokeLinecap: "round",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60 120 C55 90 40 60 25 35" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60 120 C62 90 75 60 95 32" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60 120 V38" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60 120 C50 85 30 55 15 45" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60 120 C70 85 90 55 105 45" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M42 80 C30 75 22 62 25 50 C35 55 42 70 42 80Z",
					fill: "oklch(0.655 0.036 133)",
					opacity: "0.85"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M78 75 C90 70 98 57 95 45 C85 50 78 65 78 75Z",
					fill: "oklch(0.655 0.036 133)",
					opacity: "0.85"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(25, 30)",
					children: [Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "0",
						cy: "-9",
						rx: "3.5",
						ry: "8",
						fill: "oklch(0.958 0.016 82)",
						transform: `rotate(${i * 45})`
					}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "0",
						cy: "0",
						r: "4",
						fill: "oklch(0.78 0.07 82)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(60, 24)",
					children: [Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "0",
						cy: "-9",
						rx: "4",
						ry: "8.5",
						fill: "oklch(0.68 0.058 24)",
						transform: `rotate(${i * 45})`
					}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "0",
						cy: "0",
						r: "4.5",
						fill: "oklch(0.958 0.016 82)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(95, 32)",
					children: [Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "0",
						cy: "-8",
						rx: "3.5",
						ry: "7.5",
						fill: "oklch(0.958 0.016 82)",
						transform: `rotate(${i * 45})`
					}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "0",
						cy: "0",
						r: "3.8",
						fill: "oklch(0.78 0.07 82)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M42 98 L78 98 L74 130 L46 130 Z",
					fill: "oklch(0.958 0.016 82)",
					stroke: "oklch(0.415 0.047 46)",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "38",
					y: "94",
					width: "44",
					height: "6",
					rx: "2",
					fill: "oklch(0.885 0.029 78)",
					stroke: "oklch(0.415 0.047 46)",
					strokeWidth: "1.5"
				})
			]
		})
	});
}
function PresentsObject() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-24 w-32 items-end justify-center gap-1.5 sm:h-32 sm:w-40 group-hover:scale-105 transition-transform duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmallPresent, {
				className: "h-12 w-11 -rotate-6",
				body: "bg-cocoa",
				ribbon: "bg-cream"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmallPresent, {
				className: "h-16 w-16",
				body: "bg-walnut",
				ribbon: "bg-beige"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmallPresent, {
				className: "h-11 w-10 rotate-6",
				body: "bg-taupe",
				ribbon: "bg-cream"
			})
		]
	});
}
function SmallPresent({ className = "", body = "bg-walnut", ribbon = "bg-cream" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `card-texture absolute inset-0 rounded-[4px] ${body} shadow-object border border-black/10` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute left-1/2 top-0 h-full w-[20%] -translate-x-1/2 ${ribbon} shadow-xs` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute left-0 top-[40%] h-[20%] w-full ${ribbon} shadow-xs` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-[16%] left-1/2 h-[30%] w-[50%] -translate-x-1/2 flex justify-center items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-3 w-3 rounded-full ${ribbon} border border-black/10 shadow-xs` })
			})
		]
	});
}
var EASE = [
	.22,
	1,
	.36,
	1
];
function LuxuryBow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 180 110",
		className: "h-full w-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "ribbonGrad",
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "100%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#FAF7F2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "50%",
						stopColor: "#EFE8DD"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#DDD2C1"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "goldGrad",
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "0%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#D4AF37"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "50%",
						stopColor: "#FFF8DC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#AA7C11"
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M90 60 C65 20 20 20 22 50 C24 75 60 70 90 60 Z",
				fill: "url(#ribbonGrad)",
				stroke: "url(#goldGrad)",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 46 C45 40 68 48 85 58",
				stroke: "oklch(0.415 0.047 46 / 0.3)",
				strokeWidth: "1.2",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M90 60 C115 20 160 20 158 50 C156 75 120 70 90 60 Z",
				fill: "url(#ribbonGrad)",
				stroke: "url(#goldGrad)",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M148 46 C135 40 112 48 95 58",
				stroke: "oklch(0.415 0.047 46 / 0.3)",
				strokeWidth: "1.2",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M82 64 C68 85 55 102 45 108 C58 98 75 80 86 66 Z",
				fill: "url(#ribbonGrad)",
				stroke: "url(#goldGrad)",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M98 64 C112 85 125 102 135 108 C122 98 105 80 94 66 Z",
				fill: "url(#ribbonGrad)",
				stroke: "url(#goldGrad)",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "90",
				cy: "60",
				rx: "14",
				ry: "11",
				fill: "url(#ribbonGrad)",
				stroke: "url(#goldGrad)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "90",
				cy: "60",
				r: "4",
				fill: "url(#goldGrad)"
			})
		]
	});
}
function BoxObject({ children, tooltip, onClick, delay, drift }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		type: "button",
		onClick,
		initial: {
			opacity: 0,
			y: 50,
			scale: .8
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		transition: {
			delay,
			duration: .8,
			ease: EASE
		},
		whileHover: {
			y: -16,
			scale: 1.08
		},
		whileTap: { scale: .95 },
		className: "group relative flex flex-col items-center focus-visible:outline-none cursor-pointer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 -bottom-4 h-6 rounded-[50%] bg-gold/20 blur-md transition-all duration-300 group-hover:scale-125 group-hover:bg-gold/35" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block relative z-10 filter drop-shadow-[0_16px_24px_rgba(0,0,0,0.3)] transition-transform duration-300",
				style: { animation: `sway ${4 + drift}s ease-in-out ${drift}s infinite` },
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hand mt-3 rounded-full border border-gold/40 bg-cream/90 px-4 py-1 text-lg text-cocoa shadow-paper backdrop-blur-xs transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-beige group-hover:shadow-lift font-medium",
				children: tooltip
			})
		]
	});
}
function GiftBox({ opened, onOpen, onSelect, onFinal, recipient, exploredAll }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		initial: {
			opacity: 0,
			scale: .9
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: 1.04
		},
		transition: {
			duration: .9,
			ease: EASE
		},
		className: "relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			animate: {
				scale: opened ? 1 : .96,
				y: opened ? -10 : 10
			},
			transition: {
				duration: 1.2,
				ease: EASE
			},
			className: "relative w-full max-w-[540px]",
			style: { perspective: 1200 },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scaleY: .2
					},
					animate: {
						opacity: 1,
						scaleY: 1
					},
					exit: { opacity: 0 },
					transition: {
						duration: 1.1,
						ease: EASE
					},
					className: "pointer-events-none absolute inset-x-0 -top-16 bottom-24 rounded-[50%] blur-3xl",
					style: { background: "radial-gradient(ellipse at 50% 65%, oklch(0.94 0.14 85 / 0.95), transparent 75%)" }
				}, "glow") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: opened && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					className: "relative z-20 mx-auto grid max-w-[480px] grid-cols-2 place-items-center gap-x-6 gap-y-10 pb-8 sm:gap-x-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoxObject, {
							tooltip: "Scrapbook Memories",
							onClick: () => onSelect("album"),
							delay: .65,
							drift: .4,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumObject, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoxObject, {
							tooltip: "Handwritten Letter",
							onClick: () => onSelect("letter"),
							delay: .8,
							drift: 1.1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterObject, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoxObject, {
							tooltip: "Fresh Flower Bouquet",
							onClick: () => onSelect("bouquet"),
							delay: .95,
							drift: .8,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BouquetObject, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoxObject, {
							tooltip: "Birthday Presents",
							onClick: () => onSelect("gifts"),
							delay: 1.1,
							drift: 1.5,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresentsObject, {})
						})
					]
				}, "contents") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-[460px]",
					style: { transformStyle: "preserve-3d" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: false,
							animate: opened ? {
								rotateX: -125,
								y: -36,
								opacity: .92
							} : {
								rotateX: 0,
								y: 0,
								opacity: 1
							},
							transition: {
								duration: 1.3,
								ease: EASE
							},
							className: "absolute -top-[52px] left-1/2 z-20 h-[72px] w-[105%] -translate-x-1/2 rounded-t-xl rounded-b-md shadow-2xl",
							style: {
								transformOrigin: "50% 100%",
								transformStyle: "preserve-3d"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-t-xl rounded-b-md bg-gradient-to-b from-[#3a2015] via-[#2d180e] to-[#1f1009] border-t-2 border-gold/50 shadow-lift" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-[14px] rounded-b-md bg-black/40 border-t border-gold/30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 h-full w-[64px] -translate-x-1/2 bg-gradient-to-r from-cream via-white to-beige border-x border-gold/40 shadow-sm" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-3 top-1.5 h-0.5 bg-gold/60" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -top-[64px] left-1/2 h-[90px] w-[150px] -translate-x-1/2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxuryBow, {})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							type: "button",
							...!opened ? {
								onClick: onOpen,
								"aria-label": "Open the gift box",
								whileHover: {
									scale: 1.025,
									y: -4
								},
								whileTap: { scale: .98 }
							} : {},
							className: "relative block h-[210px] w-full cursor-pointer rounded-b-xl rounded-t-md focus-visible:outline-none sm:h-[240px]",
							style: { cursor: opened ? "default" : "pointer" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-b-xl rounded-t-md bg-gradient-to-b from-[#2d180e] via-[#24120a] to-[#180b05] border-x border-b border-gold/30 shadow-2xl" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-[18px] rounded-t-md bg-black/45" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-1/2 w-[64px] -translate-x-1/2 bg-gradient-to-r from-cream via-white to-beige border-x border-gold/40 shadow-sm" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-3 left-1/2 w-px -translate-x-1/2 bg-walnut/30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-4 bottom-3 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SprigLine, { className: "absolute bottom-6 left-6 h-7 w-28 text-gold/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SprigLine, { className: "absolute bottom-6 right-6 h-7 w-28 -scale-x-100 text-gold/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !opened && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										rotate: -8,
										y: -10
									},
									animate: {
										opacity: 1,
										rotate: [
											-6,
											-2,
											-6
										],
										y: 0
									},
									transition: {
										repeat: Infinity,
										duration: 4,
										ease: "easeInOut"
									},
									className: "absolute right-10 top-12 z-30 flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-0.5 bg-gold/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative rounded-md border border-gold/50 bg-cream px-3 py-1.5 shadow-md paper",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full border border-gold bg-cocoa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "hand text-lg text-cocoa font-medium",
											children: [
												"For ",
												recipient,
												" ♥"
											]
										})]
									})]
								}) })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto h-7 w-[88%] rounded-[50%] bg-cocoa/40 blur-xl" })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 min-h-[64px] text-center z-30",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: !opened ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 6
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: { opacity: 0 },
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hand text-2xl text-cocoa font-semibold",
						children: [
							"✨ Tap the gift box to unwrap your memories, ",
							recipient,
							" ✨"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-walnut/60 font-sans",
						children: "Click anywhere on the box to lift the lid"
					})]
				}, "hint") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: 1,
						duration: .8
					},
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hand text-2xl text-cocoa font-semibold",
						children: "pick a surprise from inside the box…"
					}), exploredAll && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onFinal,
						className: "rounded-full border border-gold/50 bg-cream px-8 py-3 text-xl text-cocoa shadow-paper transition-all duration-300 hover:bg-beige hover:scale-105",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hand font-bold",
							children: "✨ wait… there's one final birthday surprise →"
						})
					})]
				}, "pick")
			})
		})]
	}, "box");
}
function SceneShell({ children, onBack, label = "Back to the gift box", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		initial: {
			opacity: 0,
			scale: .97,
			y: 24
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .98,
			y: 16
		},
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `relative z-10 min-h-[100svh] w-full px-4 pb-16 pt-20 sm:px-6 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: onBack,
			className: "fixed left-3 top-3 z-30 rounded-full border border-walnut/25 bg-cream/85 px-4 py-2 text-lg text-walnut shadow-paper backdrop-blur-sm transition-colors hover:bg-beige/80 sm:left-6 sm:top-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "hand",
				children: ["← ", label]
			})
		}), children]
	});
}
function VintageCamera() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative h-32 w-48 drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] group hover:scale-105 transition-transform duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 rounded-xl bg-gradient-to-b from-[#4A4D52] via-[#2B2D31] to-[#18191B] border border-white/20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 top-0 h-10 rounded-t-xl bg-gradient-to-b from-[#D4D7DC] via-[#A8ADBE] to-[#7B8090] border-b border-black/30 flex items-center justify-between px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-6 rounded-t-sm bg-gradient-to-b from-gray-200 to-gray-400 border border-black/40 shadow-xs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-7 rounded-t-md bg-gradient-to-b from-gray-300 to-gray-500 border border-black/40 shadow-xs" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-2 top-11 bottom-2 rounded-b-lg bg-[#151618] border-t border-black/50 opacity-95",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-[radial-gradient(#2c2d30_1px,transparent_1px)] [background-size:4px_4px]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/3 items-center justify-center rounded-full bg-gradient-to-b from-[#606368] to-[#1a1b1d] p-1.5 shadow-2xl ring-2 ring-black/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-[#0a0f18] via-[#122238] to-[#040810] border-2 border-gray-400/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-3 top-3 h-5 w-8 rounded-full bg-white/20 blur-xs rotate-[-30deg]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 rounded-full bg-blue-900/40 border border-cyan-400/30" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-6 top-3 h-3.5 w-6 rounded-sm bg-cyan-900/60 border border-cyan-400/50 shadow-inner" })
			]
		})
	});
}
function MaskingTape({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `absolute z-20 h-6 w-24 bg-[#EFE8D8]/85 opacity-90 backdrop-blur-xs shadow-xs border-y border-black/10 ${className}`,
		style: { clipPath: "polygon(0% 15%, 4% 0%, 96% 0%, 100% 20%, 98% 85%, 95% 100%, 5% 100%, 0% 80%)" }
	});
}
function MemoriesDump({ photos, onSelectPhoto }) {
	const photoPaths = photos.map((p) => p.image_url);
	const getUrl = useMediaUrls(photoPaths);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative my-6 rounded-3xl border-4 border-[#2A180E] p-6 sm:p-10 shadow-2xl overflow-hidden",
		style: {
			background: `
          linear-gradient(180deg, rgba(36,21,10,0.85) 0%, rgba(24,13,6,0.92) 100%),
          repeating-linear-gradient(90deg, #422817 0px, #361F11 40px, #422817 80px),
          radial-gradient(#1f1007 1px, transparent 1px)
        `,
			backgroundSize: "cover, 100% 100%, 8px 8px"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "hand text-4xl text-cream font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
					children: "📸 The Memories Dump"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-sans tracking-widest text-gold/90 uppercase mt-1",
					children: "every polaroid taped with love"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 pb-20",
				children: photos.map((photo, index) => {
					const signedUrl = getUrl(photo.image_url);
					const rotations = [
						-3.5,
						2.5,
						-2,
						3,
						-1.5,
						4,
						-2.8,
						1.8
					];
					const rotDeg = rotations[index % rotations.length];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .85,
							y: 20
						},
						animate: {
							opacity: 1,
							scale: 1,
							y: 0
						},
						transition: {
							delay: index * .05,
							duration: .5
						},
						style: { transform: `rotate(${rotDeg}deg)` },
						whileHover: {
							scale: 1.06,
							rotate: 0,
							zIndex: 30,
							transition: { duration: .2 }
						},
						onClick: () => onSelectPhoto(photo, index),
						className: "group relative cursor-pointer rounded-sm border-[10px] border-cream bg-cream p-1 shadow-[0_12px_25px_rgba(0,0,0,0.6)] transition-all duration-300 hover:shadow-[0_25px_40px_rgba(0,0,0,0.8)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskingTape, { className: "-top-4 left-1/2 -translate-x-1/2 rotate-[-2deg] group-hover:rotate-0 transition-transform" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-square w-full overflow-hidden bg-black/20 rounded-xs",
								children: [signedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: signedUrl,
									alt: photo.caption || "Memory photo",
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
									loading: "lazy"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-full w-full flex-col items-center justify-center bg-beige/40 p-2 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6 text-taupe/60 mb-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "hand text-sm text-cocoa",
										children: photo.caption || "Special Memory"
									})]
								}), photo.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-2 right-2 rounded-full bg-gold/90 p-1 text-cocoa shadow-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3.5 w-3.5 fill-cocoa" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 min-h-[38px] px-1 text-center",
								children: [photo.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hand text-xl text-cocoa leading-tight line-clamp-1",
									children: photo.caption
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hand text-lg text-walnut/60 italic",
									children: "sweet memory"
								}), photo.taken_on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-sans tracking-widest text-walnut/60 uppercase mt-0.5",
									children: new Date(photo.taken_on).toLocaleDateString("en-US", {
										month: "short",
										day: "numeric",
										year: "numeric"
									})
								})]
							})
						]
					}, photo.id || index);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 right-6 z-20 hidden sm:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VintageCamera, {})
			})
		]
	});
}
function PolaroidDeck({ photos, onSelectPhoto }) {
	const [isFanned, setIsFanned] = (0, import_react.useState)(true);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const photoPaths = photos.map((p) => p.image_url);
	const getUrl = useMediaUrls(photoPaths);
	const deckPhotos = photos.slice(0, 6);
	if (deckPhotos.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative my-8 flex flex-col items-center justify-center py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setIsFanned(!isFanned),
				className: "inline-flex items-center gap-1.5 rounded-full border border-walnut/25 bg-cream/80 px-4 py-1.5 text-sm text-cocoa shadow-paper hover:bg-beige transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4 text-cocoa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hand text-lg",
					children: isFanned ? "Stack Photos" : "Fan Out Deck"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hand text-lg text-walnut/70",
				children: "(tap any photo to view in detail)"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex h-[340px] w-full max-w-[460px] items-center justify-center sm:h-[400px]",
			style: { perspective: 1e3 },
			children: deckPhotos.map((photo, index) => {
				const total = deckPhotos.length;
				const signedUrl = getUrl(photo.image_url);
				const centerOffset = index - (total - 1) / 2;
				const rotateDeg = isFanned ? centerOffset * 14 : index * 2 - 4;
				const translateX = isFanned ? centerOffset * 48 : index * 4;
				const translateY = isFanned ? Math.abs(centerOffset) * 12 : 0;
				const zIndex = activeIndex === index ? 30 : total - Math.abs(index - activeIndex);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .8,
						opacity: 0
					},
					animate: {
						scale: activeIndex === index ? 1.05 : 1,
						rotate: rotateDeg,
						x: translateX,
						y: translateY,
						opacity: 1
					},
					whileHover: {
						scale: 1.08,
						rotate: rotateDeg * .8,
						y: translateY - 16,
						zIndex: 40
					},
					transition: {
						duration: .5,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					style: { zIndex },
					onClick: () => {
						setActiveIndex(index);
						onSelectPhoto(photo, index);
					},
					className: "absolute cursor-pointer rounded-lg border-8 border-cream bg-cream p-3 shadow-lift transition-shadow duration-300 hover:shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-[200px] w-[180px] overflow-hidden rounded bg-cocoa/10 sm:h-[240px] sm:w-[210px]",
						children: [signedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: signedUrl,
							alt: photo.caption || "Memory polaroid",
							className: "h-full w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full w-full flex-col items-center justify-center bg-beige/40 p-4 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-8 w-8 text-taupe/60 mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hand text-lg text-cocoa",
								children: photo.caption || "Special Memory"
							})]
						}), photo.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-2 right-2 rounded-full bg-gold/90 p-1 text-cocoa shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3.5 w-3.5 fill-cocoa" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hand text-2xl text-cocoa line-clamp-1",
							children: photo.caption || "Unforgettable Moment"
						}), photo.taken_on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-sans tracking-widest text-walnut/60 uppercase",
							children: new Date(photo.taken_on).toLocaleDateString("en-US", {
								month: "short",
								year: "numeric"
							})
						})]
					})]
				}, photo.id || index);
			})
		})]
	});
}
function AlbumScene() {
	const { data: settings } = useSettings();
	const { data: categories = [] } = useCategories();
	const { data: photos = [], isLoading } = usePhotos();
	const [viewMode, setViewMode] = (0, import_react.useState)("dump");
	const [activeCategoryId, setActiveCategoryId] = (0, import_react.useState)(null);
	const [selectedPhotoIndex, setSelectedPhotoIndex] = (0, import_react.useState)(null);
	const photoPaths = photos.map((p) => p.image_url);
	const getUrl = useMediaUrls(photoPaths);
	const filteredPhotos = activeCategoryId ? photos.filter((p) => p.category_id === activeCategoryId) : photos;
	const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-2 py-4 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							scale: .8,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						transition: { duration: .6 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Daisy, { className: "mx-auto mb-3 h-8 w-8 text-taupe/80" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl text-cocoa sm:text-5xl",
						children: settings?.album_intro || "Our Precious Memories Dump"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hand mt-2 text-xl text-walnut/80",
						children: "polaroid snapshots of sisterhood, laughter, and cherished milestones"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SprigLine, { className: "mx-auto mt-4 h-6 w-48 text-taupe/50" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setViewMode("dump"),
						className: `flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${viewMode === "dump" ? "border border-gold/40 bg-cocoa text-cream shadow-md scale-105" : "border border-walnut/20 bg-cream/70 text-walnut hover:bg-beige/80"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hand text-lg font-semibold",
							children: "📸 Taped Memories Dump"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setViewMode("deck"),
						className: `flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${viewMode === "deck" ? "border border-gold/40 bg-cocoa text-cream shadow-md scale-105" : "border border-walnut/20 bg-cream/70 text-walnut hover:bg-beige/80"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hand text-lg",
							children: "Polaroid Fan Deck"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setViewMode("roadmap"),
						className: `flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${viewMode === "roadmap" ? "border border-gold/40 bg-cocoa text-cream shadow-md scale-105" : "border border-walnut/20 bg-cream/70 text-walnut hover:bg-beige/80"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hand text-lg",
							children: "Memory Roadmap"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setViewMode("grid"),
						className: `flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${viewMode === "grid" ? "border border-gold/40 bg-cocoa text-cream shadow-md scale-105" : "border border-walnut/20 bg-cream/70 text-walnut hover:bg-beige/80"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hand text-lg",
							children: "All Grid"
						})]
					})
				]
			}),
			viewMode === "grid" && categories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setActiveCategoryId(null),
					className: `rounded-full px-4 py-1 text-xs transition-colors ${activeCategoryId === null ? "bg-cocoa text-cream" : "bg-cream/70 text-walnut border border-walnut/20 hover:bg-beige"}`,
					children: [
						"All (",
						photos.length,
						")"
					]
				}), categories.map((cat) => {
					const count = photos.filter((p) => p.category_id === cat.id).length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveCategoryId(cat.id),
						className: `rounded-full px-4 py-1 text-xs transition-colors ${activeCategoryId === cat.id ? "bg-cocoa text-cream" : "bg-cream/70 text-walnut border border-walnut/20 hover:bg-beige"}`,
						children: [
							cat.name,
							" (",
							count,
							")"
						]
					}, cat.id);
				})]
			}),
			isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { rotate: 360 },
					transition: {
						repeat: Infinity,
						duration: 3,
						ease: "linear"
					},
					className: "mx-auto h-8 w-8 rounded-full border-2 border-walnut/30 border-t-cocoa"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hand mt-3 text-lg text-walnut/70",
					children: "Unfolding memories..."
				})]
			}) : photos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 text-center rounded-2xl border border-walnut/15 bg-card/60 p-10 paper shadow-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeafBranch, { className: "mx-auto h-12 w-12 text-taupe/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-2xl text-cocoa",
						children: "Our Memories Dump Begins Here"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hand mt-2 text-xl text-walnut/70",
						children: "Upload your photos from the admin panel to populate this taped polaroid dump!"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				viewMode === "dump" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoriesDump, {
						photos,
						onSelectPhoto: (photo) => {
							const idx = filteredPhotos.findIndex((p) => p.id === photo.id);
							setSelectedPhotoIndex(idx >= 0 ? idx : 0);
						}
					})
				}),
				viewMode === "deck" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolaroidDeck, {
						photos,
						onSelectPhoto: (photo) => {
							const idx = filteredPhotos.findIndex((p) => p.id === photo.id);
							setSelectedPhotoIndex(idx >= 0 ? idx : 0);
						}
					})
				}),
				viewMode === "roadmap" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "relative mt-12 space-y-12 before:absolute before:left-1/2 before:top-4 before:bottom-4 before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-gold/40 before:via-walnut/20 before:to-rose/40",
					children: photos.map((photo, index) => {
						const isEven = index % 2 === 0;
						const signedUrl = getUrl(photo.image_url);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: isEven ? -30 : 30
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								delay: index * .1,
								duration: .6
							},
							className: `relative flex items-center justify-between gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-[calc(50%-2rem)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => setSelectedPhotoIndex(index),
										className: "group relative cursor-pointer rounded-2xl border border-walnut/20 bg-cream p-4 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lift paper",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "aspect-video w-full overflow-hidden rounded-lg bg-cocoa/5",
											children: signedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: signedUrl,
												alt: photo.caption || "",
												className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-full w-full items-center justify-center bg-beige/40",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-6 w-6 text-rose" })
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "hand text-2xl text-cocoa",
													children: photo.caption || "Milestone"
												}),
												photo.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-walnut/80 line-clamp-2",
													children: photo.description
												}),
												photo.taken_on && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-2 text-xs font-sans tracking-wider text-walnut/60 uppercase flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }), new Date(photo.taken_on).toLocaleDateString("en-US", {
														month: "long",
														year: "numeric"
													})]
												})
											]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-cream bg-cocoa text-cream shadow-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[calc(50%-2rem)] hidden sm:block" })
							]
						}, photo.id);
					})
				}),
				viewMode === "grid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: filteredPhotos.map((photo, index) => {
						const signedUrl = getUrl(photo.image_url);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							onClick: () => setSelectedPhotoIndex(index),
							className: "group cursor-pointer rounded-xl border border-walnut/20 bg-cream p-4 shadow-paper transition-all duration-300 hover:scale-[1.02] hover:shadow-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/3] overflow-hidden rounded bg-cocoa/5",
								children: signedUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: signedUrl,
									alt: "",
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hand mt-3 text-2xl text-cocoa text-center",
								children: photo.caption
							})]
						}, photo.id);
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedPhotoIndex !== null && currentPhoto && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "fixed inset-0 z-50 flex items-center justify-center bg-cocoa/85 p-4 backdrop-blur-md",
				onClick: () => setSelectedPhotoIndex(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .9,
						opacity: 0,
						y: 10
					},
					animate: {
						scale: 1,
						opacity: 1,
						y: 0
					},
					exit: {
						scale: .9,
						opacity: 0,
						y: 10
					},
					onClick: (e) => e.stopPropagation(),
					className: "relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-gold/30 bg-cream p-4 shadow-lift sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedPhotoIndex(null),
							className: "absolute right-4 top-4 z-10 rounded-full bg-cocoa/10 p-2 text-cocoa hover:bg-cocoa/20 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						}),
						selectedPhotoIndex > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedPhotoIndex(selectedPhotoIndex - 1),
							className: "absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-cocoa/10 p-2 text-cocoa hover:bg-cocoa/20 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-6 w-6" })
						}),
						selectedPhotoIndex < filteredPhotos.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedPhotoIndex(selectedPhotoIndex + 1),
							className: "absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-cocoa/10 p-2 text-cocoa hover:bg-cocoa/20 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-h-[60vh] w-full overflow-hidden rounded-lg bg-cocoa/5 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: getUrl(currentPhoto.image_url),
									alt: currentPhoto.caption || "Scrapbook photo",
									className: "max-h-[60vh] max-w-full object-contain rounded-lg shadow-sm"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 text-center max-w-xl",
								children: [currentPhoto.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "hand text-2xl text-cocoa",
									children: currentPhoto.caption
								}), currentPhoto.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-walnut/80 leading-relaxed",
									children: currentPhoto.description
								})]
							})]
						})
					]
				})
			}) })
		]
	});
}
function LetterScene() {
	const { data: letter, isLoading } = useLetter();
	const { data: settings } = useSettings();
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const heading = letter?.heading || settings?.letter_title || "Dearest Sister,";
	const content = letter?.content || `From childhood secrets and endless laughter to all the milestones we've celebrated together, having you as my sister is the greatest gift of my life.\n\nYou bring so much light, warmth, and grace into every room you enter. I hope this birthday brings you all the joy, love, and magic you so richly deserve.`;
	const signature = letter?.signature || settings?.signature || "With all my love forever,";
	const dateStr = letter?.letter_date ? new Date(letter.letter_date).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-2 py-4 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeafBranch, { className: "pointer-events-none absolute -left-8 top-12 h-64 w-32 text-sage/35 sm:h-80 sm:w-44" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeafBranch, { className: "pointer-events-none absolute -right-8 bottom-12 h-64 w-32 -scale-x-100 text-sage/30 sm:h-80 sm:w-44" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Daisy, { className: "mx-auto mb-3 h-8 w-8 text-taupe/80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl text-cocoa sm:text-5xl",
						children: settings?.letter_title || "A Letter From My Heart"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hand mt-2 text-xl text-walnut/80",
						children: "written specially for your special day"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SprigLine, { className: "mx-auto mt-4 h-6 w-48 text-taupe/50" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-col items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: !isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							scale: .9,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						exit: {
							scale: .9,
							opacity: 0,
							y: -20
						},
						transition: { duration: .7 },
						onClick: () => setIsOpen(true),
						className: "group relative cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-[260px] w-[340px] rounded-xl border border-walnut/30 bg-beige/90 p-6 shadow-lift transition-transform duration-500 group-hover:scale-105 sm:h-[300px] sm:w-[420px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-taupe/20 border-b border-walnut/20",
									style: { clipPath: "polygon(0 0, 100% 0, 50% 100%)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									whileHover: {
										scale: 1.15,
										rotate: 5
									},
									className: "absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rose shadow-lg ring-4 ring-cream/80",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-7 w-7 text-cream fill-cream/30" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "hand text-2xl text-cocoa",
										children: ["For ", settings?.recipient_name || "Iram"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-walnut/60 uppercase tracking-widest",
										children: "Tap to open letter"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-2 h-4 w-3/4 rounded-[50%] bg-cocoa/20 blur-md" })]
					}, "envelope") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30,
							scale: .95
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						transition: {
							duration: .9,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "relative w-full rounded-2xl border border-walnut/25 bg-cream p-8 shadow-paper sm:p-12 paper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-walnut/15 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-widest text-walnut/50",
									children: dateStr || "Personal Letter"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-gold" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "hand mt-6 text-4xl text-cocoa",
								children: heading
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-4 text-lg leading-relaxed text-walnut/90",
								children: content.split("\n\n").map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "whitespace-pre-line font-serif text-xl sm:text-2xl",
									children: para
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 border-t border-walnut/15 pt-6 text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hand text-3xl text-cocoa",
									children: signature
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hand mt-1 text-xl text-walnut/70",
									children: settings?.signature || "Your loving sister"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setIsOpen(false),
									className: "rounded-full border border-walnut/20 bg-beige/60 px-5 py-1.5 text-sm text-walnut hover:bg-beige transition-colors",
									children: "Fold letter back"
								})
							})
						]
					}, "letter-paper")
				})
			})
		]
	});
}
function BouquetScene() {
	const { data: bouquet } = useBouquet();
	const { data: settings } = useSettings();
	const [activeNote, setActiveNote] = (0, import_react.useState)(null);
	const imageUrl = useMediaUrls([bouquet?.image_url])(bouquet?.image_url);
	const defaultNotes = [
		{
			title: "Grace & Beauty",
			text: "May your year bloom with elegance and unconditional happiness."
		},
		{
			title: "Sweet Moments",
			text: "Remembering every laughter-filled afternoon we shared."
		},
		{
			title: "Sisterly Bond",
			text: "No matter how far apart we are, our hearts blossom together."
		},
		{
			title: "Shining Light",
			text: "Thank you for being the bright floral light in our family."
		}
	];
	const title = bouquet?.title || "A Birthday Bouquet For You";
	const message = bouquet?.message || settings?.bouquet_message || "Like flowers blooming under the warm sun, your warmth and kindness make the world a gentler, prettier place.";
	const description = bouquet?.description || "A bouquet woven with delicate dusty rose, sage leaves, soft cream petals, and endless sisterly affection.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-2 py-4 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						scale: .8,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					transition: { duration: .6 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, { className: "mx-auto mb-3 h-9 w-9 text-rose/80" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl text-cocoa sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hand mt-2 text-xl text-walnut/80",
					children: "freshly gathered with love and wishes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SprigLine, { className: "mx-auto mt-4 h-6 w-48 text-taupe/50" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -20
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { duration: .8 },
				className: "md:col-span-6 relative flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-square w-full max-w-[340px] overflow-hidden rounded-full border-4 border-cream bg-beige/50 p-4 shadow-lift ring-1 ring-walnut/15",
					children: [imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: imageUrl,
						alt: title,
						className: "h-full w-full object-cover rounded-full"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-b from-beige/60 to-cream p-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Daisy, { className: "h-20 w-20 text-rose/70 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hand mt-2 text-2xl text-cocoa",
							children: "Wildflowers & Roses"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 rounded-full bg-radial from-rose/10 via-transparent to-transparent" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-4 w-52 rounded-[50%] bg-cocoa/20 blur-md" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 20
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: {
					duration: .8,
					delay: .2
				},
				className: "md:col-span-6 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl text-cocoa",
							children: "A Sisterly Wish"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-serif text-lg leading-relaxed text-walnut/90",
							children: message
						}),
						description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hand mt-4 text-lg text-walnut/70 border-t border-walnut/15 pt-3",
							children: description
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-walnut/60 mb-3 font-medium",
						children: "Pick a flower note:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						children: defaultNotes.map((note, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveNote(activeNote === index ? null : index),
							className: `flex items-center gap-2 rounded-xl border p-3 text-left transition-all duration-300 ${activeNote === index ? "border-rose bg-rose/15 shadow-sm text-cocoa" : "border-walnut/20 bg-cream/70 hover:bg-beige/70 text-walnut"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: `h-4 w-4 shrink-0 ${activeNote === index ? "text-rose" : "text-taupe"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hand text-lg font-medium",
								children: note.title
							})]
						}, index))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: activeNote !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							height: 0
						},
						animate: {
							opacity: 1,
							height: "auto"
						},
						exit: {
							opacity: 0,
							height: 0
						},
						className: "mt-4 overflow-hidden rounded-xl border border-rose/30 bg-cream p-4 shadow-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hand text-xl text-cocoa",
							children: defaultNotes[activeNote]?.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-walnut/80",
							children: defaultNotes[activeNote]?.text
						})]
					}) })
				] })]
			})]
		})]
	});
}
function GiftsScene() {
	const { data: gifts = [], isLoading } = useGifts();
	const [unwrappedIds, setUnwrappedIds] = (0, import_react.useState)({});
	const [selectedGiftId, setSelectedGiftId] = (0, import_react.useState)(null);
	const giftPaths = gifts.map((g) => g.image_url);
	const getUrl = useMediaUrls(giftPaths);
	const toggleUnwrap = (id) => {
		setUnwrappedIds((prev) => ({
			...prev,
			[id]: true
		}));
		setSelectedGiftId(id);
	};
	gifts.find((g) => g.id === selectedGiftId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-2 py-4 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						scale: .8,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					transition: { duration: .6 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "mx-auto mb-3 h-8 w-8 text-cocoa/80" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl text-cocoa sm:text-5xl",
					children: "Your Birthday Presents"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hand mt-2 text-xl text-walnut/80",
					children: "tap each package to unwrap your surprises"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SprigLine, { className: "mx-auto mt-4 h-6 w-48 text-taupe/50" })
			]
		}), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { rotate: 360 },
				transition: {
					repeat: Infinity,
					duration: 3,
					ease: "linear"
				},
				className: "mx-auto h-8 w-8 rounded-full border-2 border-walnut/30 border-t-cocoa"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hand mt-3 text-lg text-walnut/70",
				children: "Preparing your presents..."
			})]
		}) : gifts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 text-center rounded-2xl border border-walnut/15 bg-cream/70 p-10 paper shadow-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "mx-auto h-12 w-12 text-taupe/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 text-2xl text-cocoa",
					children: "Special Birthday Surprises"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hand mt-2 text-xl text-walnut/80",
					children: "A box full of warm hugs, happy laughter, and sisterly love reserved just for you!"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: gifts.map((gift, index) => {
				const isUnwrapped = !!unwrappedIds[gift.id];
				const signedUrl = getUrl(gift.image_url);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: index * .1,
						duration: .6
					},
					onClick: () => toggleUnwrap(gift.id),
					className: "group relative cursor-pointer rounded-2xl border border-walnut/20 bg-cream p-5 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lift paper",
					children: !isUnwrapped ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center py-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								whileHover: {
									scale: 1.1,
									rotate: [
										0,
										-5,
										5,
										0
									]
								},
								className: "relative flex h-24 w-24 items-center justify-center rounded-xl bg-cocoa text-cream shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-12 w-12 text-beige" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 bg-gold/90" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-1/2 w-3 -translate-x-1/2 bg-gold/90" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hand mt-4 text-2xl text-cocoa font-medium",
								children: gift.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-2 inline-flex items-center gap-1 rounded-full bg-rose/15 px-3 py-1 text-xs text-cocoa",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-rose" }), " Tap to unwrap"]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-video w-full overflow-hidden rounded-lg bg-beige/30",
								children: [signedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: signedUrl,
									alt: gift.name,
									className: "h-full w-full object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-full w-full items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-8 w-8 text-rose" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-2 top-2 rounded-full bg-cream/90 p-1 text-sage shadow-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-serif text-xl font-medium text-cocoa",
								children: gift.name
							}),
							gift.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-walnut/80 line-clamp-2",
								children: gift.description
							}),
							gift.personal_message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "hand mt-2 text-lg text-cocoa italic",
								children: [
									"\"",
									gift.personal_message,
									"\""
								]
							})
						]
					})
				}, gift.id);
			})
		})]
	});
}
function FinalScene({ onReplay }) {
	const { data: settings } = useSettings();
	const [candlesLit, setCandlesLit] = (0, import_react.useState)([
		true,
		true,
		true,
		true,
		true
	]);
	const [wished, setWished] = (0, import_react.useState)(false);
	const toggleCandle = (index) => {
		setCandlesLit((prev) => {
			const next = [...prev];
			next[index] = !next[index];
			if (next.every((c) => !c)) setWished(true);
			return next;
		});
	};
	const recipient = settings?.recipient_name || "Iram";
	const finalHeading = settings?.final_heading || `Happy Birthday, ${recipient}!`;
	const finalMessage = settings?.final_message || `Thank you for being the wonderful, funny, thoughtful, and cherished sister that you are. May this new year of your life be filled with boundless joy, peace, success, and all the dreams your heart desires.`;
	const closingMessage = settings?.closing_message || "Always remember how deeply loved and appreciated you are.";
	const signature = settings?.signature || "Your sister, with all my love ❤️";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			scale: .95
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			duration: 1,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "mx-auto max-w-3xl px-4 py-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeafBranch, { className: "pointer-events-none absolute -left-8 top-12 h-64 w-32 text-sage/35 sm:h-80 sm:w-44" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeafBranch, { className: "pointer-events-none absolute -right-8 bottom-12 h-64 w-32 -scale-x-100 text-sage/30 sm:h-80 sm:w-44" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { rotate: [
					0,
					10,
					-10,
					0
				] },
				transition: {
					repeat: Infinity,
					duration: 6,
					ease: "easeInOut"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Daisy, { className: "mx-auto mb-4 h-12 w-12 text-rose" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-5xl text-cocoa sm:text-6xl md:text-7xl",
				children: finalHeading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hand mt-3 text-2xl text-walnut/90",
				children: "a grand birthday wish from the bottom of my heart"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SprigLine, { className: "mx-auto mt-6 h-8 w-64 text-taupe/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-10 flex flex-col items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-3xl border border-gold/40 bg-cream/90 p-8 shadow-lift backdrop-blur-sm paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hand mb-6 text-xl text-walnut",
							children: wished ? "✨ Wish Granted! ✨" : "Make a wish and tap the candles to blow them out:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto flex flex-col items-center justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-4 mb-2 z-10",
									children: candlesLit.map((isLit, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => toggleCandle(i),
										className: "flex flex-col items-center group cursor-pointer focus:outline-none",
										title: "Tap to blow out candle",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
											mode: "wait",
											children: isLit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												initial: { scale: 0 },
												animate: { scale: [
													1,
													1.2,
													.9,
													1
												] },
												exit: {
													scale: 0,
													opacity: 0
												},
												transition: {
													repeat: Infinity,
													duration: 1.2
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-6 w-6 text-gold fill-gold/80 filter drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" })
											}, "flame") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												initial: {
													opacity: 0,
													y: 0
												},
												animate: {
													opacity: [.8, 0],
													y: -10
												},
												transition: { duration: 1 },
												className: "h-6 w-1 rounded-full bg-walnut/40 blur-xs"
											}, "smoke")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-2 rounded-t-sm bg-cream border border-walnut/30" })]
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-14 w-48 rounded-t-2xl border-x border-t border-walnut/20 bg-rose/25 relative flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "hand text-lg text-cocoa",
										children: ["Happy Birthday ", recipient]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-16 w-60 rounded-b-2xl border border-walnut/25 bg-beige/80 flex items-center justify-center shadow-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 text-rose fill-rose" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-gold" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 text-rose fill-rose" })
										]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-4 w-64 rounded-[50%] bg-cocoa/20 blur-md" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .4,
					duration: .8
				},
				className: "rounded-2xl border border-walnut/20 bg-cream p-8 shadow-paper paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl sm:text-2xl leading-relaxed text-cocoa",
						children: finalMessage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hand mt-6 text-2xl text-walnut/90",
						children: closingMessage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hand mt-4 text-3xl text-cocoa font-medium",
						children: signature
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onReplay,
					className: "inline-flex items-center gap-2 rounded-full border border-walnut/30 bg-cream/80 px-6 py-2.5 text-lg text-cocoa shadow-paper hover:bg-beige transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hand",
						children: "Visit the gift box again"
					})]
				})
			})
		]
	});
}
function Index() {
	const { data: settings } = useSettings();
	const [stage, setStage] = (0, import_react.useState)("opening");
	const [boxOpened, setBoxOpened] = (0, import_react.useState)(false);
	const [explored, setExplored] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [isPlayingAudio, setIsPlayingAudio] = (0, import_react.useState)(false);
	const recipient = settings?.recipient_name || "Iram";
	const openingHeading = settings?.opening_heading || `Happy Birthday, ${recipient}`;
	const openingMessage = settings?.opening_message || "A small quiet corner of the internet, made with love, memories, and warm sisterly feelings. Step inside whenever you're ready.";
	const openingButtonText = settings?.opening_button_text || "unfold the gift";
	const handleSelectBoxObject = (dest) => {
		setExplored((prev) => /* @__PURE__ */ new Set([...prev, dest]));
		setStage(dest);
	};
	const exploredAll = explored.size >= 4;
	const handleReplay = () => {
		setStage("box");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-[100svh] w-full overflow-hidden bg-background font-sans text-foreground paper grain",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed right-3 top-3 z-40 sm:right-6 sm:top-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/admin",
					className: "flex items-center gap-1.5 rounded-full border border-walnut/20 bg-cream/70 px-3 py-1.5 text-xs text-walnut shadow-xs backdrop-blur-sm transition-colors hover:bg-beige",
					title: "Admin Panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Admin" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
				mode: "wait",
				children: [
					stage === "opening" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opening, {
						heading: openingHeading,
						message: openingMessage,
						buttonText: openingButtonText,
						onOpen: () => {
							setStage("box");
							setBoxOpened(true);
						}
					}, "opening"),
					stage === "box" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftBox, {
						opened: boxOpened,
						onOpen: () => setBoxOpened(true),
						onSelect: handleSelectBoxObject,
						onFinal: () => setStage("final"),
						recipient,
						exploredAll
					}, "box"),
					stage === "album" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneShell, {
						onBack: () => setStage("box"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumScene, {})
					}, "album"),
					stage === "letter" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneShell, {
						onBack: () => setStage("box"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterScene, {})
					}, "letter"),
					stage === "bouquet" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneShell, {
						onBack: () => setStage("box"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BouquetScene, {})
					}, "bouquet"),
					stage === "gifts" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneShell, {
						onBack: () => setStage("box"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftsScene, {})
					}, "gifts"),
					stage === "final" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneShell, {
						onBack: () => setStage("box"),
						label: "Back to memories",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalScene, { onReplay: handleReplay })
					}, "final")
				]
			})
		]
	});
}
//#endregion
export { Index as component };

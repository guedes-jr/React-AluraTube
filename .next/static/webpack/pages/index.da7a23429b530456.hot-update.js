"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Menu */ \"./src/components/Menu/index.js\");\n/* harmony import */ var _src_components_Timeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Timeline */ \"./src/components/Timeline.js\");\n/* harmony import */ var _src_services_videoService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/services/videoService */ \"./src/services/videoService.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: \",\n        \";\\n    img {\\n        width: 80px;\\n        height: 80px;\\n        border-radius: 50%;\\n    };\\n    .user-info {\\n        display: flex;\\n        align-items: center;\\n        width: 100%;\\n        padding: 16px 32px;\\n        gap: 16px;\\n    };\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: blue;\\n    background-image: url(../public/src/img/banner.jpg);\\n    height: 230px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const service = (0,_src_services_videoService__WEBPACK_IMPORTED_MODULE_6__.videoService)();\n    const [valorDoFiltro, setValorDoFiltro] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    const [playlists, setPlaylists] = react__WEBPACK_IMPORTED_MODULE_2___default().useState({});\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        service.getAllVideos().then((dados)=>{\n            console.log(dados.data);\n            const novasPlaylists = {\n                ...playlists\n            };\n            dados.data.forEach((video)=>{\n                if (!novasPlaylists[video.playlist]) {\n                    novasPlaylists[video.playlist] = [];\n                }\n                ;\n                novasPlaylists[video.playlist].push(video);\n            });\n            setPlaylists(novasPlaylists);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    valorDoFiltro: valorDoFiltro,\n                    setValorDoFiltro: setValorDoFiltro\n                }, void 0, false, {\n                    fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Timeline, {\n                    searchValue: valorDoFiltro,\n                    playlists: playlists,\n                    children: \"Conte\\xfado\"\n                }, void 0, false, {\n                    fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(HomePage, \"/UROZqo3sR2fFUpAeLOzh6uWVoE=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"pages__StyledHeader\",\n    componentId: \"sc-30281d09-0\"\n})(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.backgroundLevel1;\n});\n_c1 = StyledHeader;\nconst StyledBanner = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"pages__StyledBanner\",\n    componentId: \"sc-30281d09-1\"\n})(_templateObject1());\n_c2 = StyledBanner;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledHeader, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledBanner, {\n                bg: _config_json__WEBPACK_IMPORTED_MODULE_3__.banner\n            }, void 0, false, {\n                fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"user-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"https://github.com/\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.github, \".png\")\n                    }, void 0, false, {\n                        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_3__.name\n                            }, void 0, false, {\n                                fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_3__.description\n                            }, void 0, false, {\n                                fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_c3 = Header;\nfunction Timeline(param) {\n    let { searchValue , ...propriedades } = param;\n    const playlistNames = Object.keys(propriedades.playlists);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Timeline__WEBPACK_IMPORTED_MODULE_5__.StyledTimeline, {\n        children: playlistNames.map((playlistName)=>{\n            const videos = propriedades.playlists[playlistName];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: playlistName\n                    }, void 0, false, {\n                        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: videos.filter((video)=>{\n                            const titleNormalized = video.title.toLowerCase();\n                            const searchValueNormalized = searchValue.toLowerCase();\n                            return titleNormalized.includes(searchValueNormalized);\n                        }).map((video)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: video.url,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: video.thumb\n                                    }, void 0, false, {\n                                        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: video.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, video.url, true, {\n                                fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                                lineNumber: 101,\n                                columnNumber: 21\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, playlistName, true, {\n                fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                lineNumber: 90,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_c4 = Timeline;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"StyledHeader\");\n$RefreshReg$(_c2, \"StyledBanner\");\n$RefreshReg$(_c3, \"Header\");\n$RefreshReg$(_c4, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU15QyxHQUFHOztrREFDaEMsOERBQUN0Qjt3Q0FBSUMsS0FBS3BCLE1BQU0wQyxLQUFLOzs7Ozs7a0RBQ3JCLDhEQUFDQztrREFBTTNDLE1BQU1tQyxLQUFLOzs7Ozs7OytCQUZabkMsTUFBTXlDLEdBQUc7Ozs7O3dCQUtyQjs7Ozs7OztlQWhCUVY7Ozs7O1FBcUJsQjs7Ozs7O0FBR047TUEvQlN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL01lbnVcIjtcbmltcG9ydCB7IFN0eWxlZFRpbWVsaW5lIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lXCI7XG5pbXBvcnQgeyB2aWRlb1NlcnZpY2UgfSBmcm9tIFwiLi4vc3JjL3NlcnZpY2VzL3ZpZGVvU2VydmljZVwiO1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3Qgc2VydmljZSA9IHZpZGVvU2VydmljZSgpO1xuICBjb25zdCBbdmFsb3JEb0ZpbHRybywgc2V0VmFsb3JEb0ZpbHRyb10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3BsYXlsaXN0cywgc2V0UGxheWxpc3RzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXJ2aWNlXG4gICAgICAuZ2V0QWxsVmlkZW9zKClcbiAgICAgIC50aGVuKChkYWRvcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYWRvcy5kYXRhKTtcbiAgICAgICAgY29uc3Qgbm92YXNQbGF5bGlzdHMgPSB7IC4uLnBsYXlsaXN0cyB9O1xuICAgICAgICBkYWRvcy5kYXRhLmZvckVhY2goKHZpZGVvKSA9PiB7XG4gICAgICAgICAgaWYgKCFub3Zhc1BsYXlsaXN0c1t2aWRlby5wbGF5bGlzdF0pIHtcbiAgICAgICAgICAgIG5vdmFzUGxheWxpc3RzW3ZpZGVvLnBsYXlsaXN0XSA9IFtdO1xuICAgICAgICAgIH07XG4gICAgICAgICAgbm92YXNQbGF5bGlzdHNbdmlkZW8ucGxheWxpc3RdLnB1c2godmlkZW8pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0UGxheWxpc3RzKG5vdmFzUGxheWxpc3RzKTtcbiAgICAgIH0pO1xuICB9LFxuICAgIFtdLFxuICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgfX0+XG4gICAgICAgIDxNZW51IHZhbG9yRG9GaWx0cm89e3ZhbG9yRG9GaWx0cm99IHNldFZhbG9yRG9GaWx0cm89e3NldFZhbG9yRG9GaWx0cm99IC8+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPFRpbWVsaW5lIHNlYXJjaFZhbHVlPXt2YWxvckRvRmlsdHJvfSBwbGF5bGlzdHM9e3BsYXlsaXN0c30+Q29udGXDumRvPC9UaW1lbGluZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG5cbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kTGV2ZWwxfTtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfTtcbiAgICAudXNlci1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMzJweDtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgIH07XG5gO1xuXG5jb25zdCBTdHlsZWRCYW5uZXIgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3B1YmxpYy9zcmMvaW1nL2Jhbm5lci5qcGcpO1xuICAgIGhlaWdodDogMjMwcHg7XG5gO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEhlYWRlcj5cbiAgICAgIDxTdHlsZWRCYW5uZXIgYmc9e2NvbmZpZy5iYW5uZXJ9IC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cbiAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtjb25maWcuZ2l0aHVifS5wbmdgfSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj57Y29uZmlnLm5hbWV9PC9oMj5cbiAgICAgICAgICA8cD57Y29uZmlnLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9TdHlsZWRIZWFkZXI+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBUaW1lbGluZSh7IHNlYXJjaFZhbHVlLCAuLi5wcm9wcmllZGFkZXMgfSkge1xuICBjb25zdCBwbGF5bGlzdE5hbWVzID0gT2JqZWN0LmtleXMocHJvcHJpZWRhZGVzLnBsYXlsaXN0cyk7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFRpbWVsaW5lPlxuICAgICAge3BsYXlsaXN0TmFtZXMubWFwKChwbGF5bGlzdE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmlkZW9zID0gcHJvcHJpZWRhZGVzLnBsYXlsaXN0c1twbGF5bGlzdE5hbWVdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzZWN0aW9uIGtleT17cGxheWxpc3ROYW1lfT5cbiAgICAgICAgICAgIDxoMj57cGxheWxpc3ROYW1lfTwvaDI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7dmlkZW9zXG4gICAgICAgICAgICAgICAgLmZpbHRlcigodmlkZW8pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlTm9ybWFsaXplZCA9IHZpZGVvLnRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hWYWx1ZU5vcm1hbGl6ZWQgPSBzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpdGxlTm9ybWFsaXplZC5pbmNsdWRlcyhzZWFyY2hWYWx1ZU5vcm1hbGl6ZWQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcCgodmlkZW8pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxhIGtleT17dmlkZW8udXJsfSBocmVmPXt2aWRlby51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2aWRlby50aHVtYn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dmlkZW8udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvU3R5bGVkVGltZWxpbmU+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbmZpZyIsInN0eWxlZCIsIk1lbnUiLCJTdHlsZWRUaW1lbGluZSIsInZpZGVvU2VydmljZSIsIkhvbWVQYWdlIiwic2VydmljZSIsInZhbG9yRG9GaWx0cm8iLCJzZXRWYWxvckRvRmlsdHJvIiwidXNlU3RhdGUiLCJwbGF5bGlzdHMiLCJzZXRQbGF5bGlzdHMiLCJ1c2VFZmZlY3QiLCJnZXRBbGxWaWRlb3MiLCJ0aGVuIiwiZGFkb3MiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm5vdmFzUGxheWxpc3RzIiwiZm9yRWFjaCIsInZpZGVvIiwicGxheWxpc3QiLCJwdXNoIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJIZWFkZXIiLCJUaW1lbGluZSIsInNlYXJjaFZhbHVlIiwiU3R5bGVkSGVhZGVyIiwidGhlbWUiLCJiYWNrZ3JvdW5kTGV2ZWwxIiwiU3R5bGVkQmFubmVyIiwiYmciLCJiYW5uZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiZ2l0aHViIiwiaDIiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwicHJvcHJpZWRhZGVzIiwicGxheWxpc3ROYW1lcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJwbGF5bGlzdE5hbWUiLCJ2aWRlb3MiLCJmaWx0ZXIiLCJ0aXRsZU5vcm1hbGl6ZWQiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwic2VhcmNoVmFsdWVOb3JtYWxpemVkIiwiaW5jbHVkZXMiLCJhIiwiaHJlZiIsInVybCIsInRodW1iIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
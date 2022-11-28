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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Menu */ \"./src/components/Menu/index.js\");\n/* harmony import */ var _src_components_Timeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Timeline */ \"./src/components/Timeline.js\");\n/* harmony import */ var _src_services_videoService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/services/videoService */ \"./src/services/videoService.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: \",\n        \";\\n    img {\\n        width: 80px;\\n        height: 80px;\\n        border-radius: 50%;\\n    };\\n    .user-info {\\n        display: flex;\\n        align-items: center;\\n        width: 100%;\\n        padding: 16px 32px;\\n        gap: 16px;\\n    };\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: blue;\\n    background-image: url(\",\n        \");\\n    background-position: center;\\n    background-size: ;\\n    height: 230px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const service = (0,_src_services_videoService__WEBPACK_IMPORTED_MODULE_6__.videoService)();\n    const [valorDoFiltro, setValorDoFiltro] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    const [playlists, setPlaylists] = react__WEBPACK_IMPORTED_MODULE_2___default().useState({});\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        service.getAllVideos().then((dados)=>{\n            console.log(dados.data);\n            const novasPlaylists = {\n                ...playlists\n            };\n            dados.data.forEach((video)=>{\n                if (!novasPlaylists[video.playlist]) {\n                    novasPlaylists[video.playlist] = [];\n                }\n                ;\n                novasPlaylists[video.playlist].push(video);\n            });\n            setPlaylists(novasPlaylists);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    valorDoFiltro: valorDoFiltro,\n                    setValorDoFiltro: setValorDoFiltro\n                }, void 0, false, {\n                    fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Timeline, {\n                    searchValue: valorDoFiltro,\n                    playlists: playlists,\n                    children: \"Conte\\xfado\"\n                }, void 0, false, {\n                    fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(HomePage, \"/UROZqo3sR2fFUpAeLOzh6uWVoE=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"pages__StyledHeader\",\n    componentId: \"sc-a77c2a5-0\"\n})(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.backgroundLevel1;\n});\n_c1 = StyledHeader;\nconst StyledBanner = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"pages__StyledBanner\",\n    componentId: \"sc-a77c2a5-1\"\n})(_templateObject1(), (param)=>{\n    let { bg  } = param;\n    return bg;\n});\n_c2 = StyledBanner;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledHeader, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledBanner, {\n                bg: _config_json__WEBPACK_IMPORTED_MODULE_3__.banner\n            }, void 0, false, {\n                fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"user-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"https://github.com/\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.github, \".png\")\n                    }, void 0, false, {\n                        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_3__.name\n                            }, void 0, false, {\n                                fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_3__.description\n                            }, void 0, false, {\n                                fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_c3 = Header;\nfunction Timeline(param) {\n    let { searchValue , ...propriedades } = param;\n    const playlistNames = Object.keys(propriedades.playlists);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Timeline__WEBPACK_IMPORTED_MODULE_5__.StyledTimeline, {\n        children: playlistNames.map((playlistName)=>{\n            const videos = propriedades.playlists[playlistName];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: playlistName\n                    }, void 0, false, {\n                        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: videos.filter((video)=>{\n                            const titleNormalized = video.title.toLowerCase();\n                            const searchValueNormalized = searchValue.toLowerCase();\n                            return titleNormalized.includes(searchValueNormalized);\n                        }).map((video)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: video.url,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: video.thumb\n                                    }, void 0, false, {\n                                        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 23\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: video.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, video.url, true, {\n                                fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                                lineNumber: 103,\n                                columnNumber: 21\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, playlistName, true, {\n                fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n                lineNumber: 92,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/junior/Documentos/Projects/AluraTube/pages/index.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_c4 = Timeline;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"StyledHeader\");\n$RefreshReg$(_c2, \"StyledBanner\");\n$RefreshReg$(_c3, \"Header\");\n$RefreshReg$(_c4, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNVO0FBQ0c7QUFDRztBQUNrQjtBQUNBO0FBRTVELFNBQVNNLFdBQVc7O0lBQ2xCLE1BQU1DLFVBQVVGLHdFQUFZQTtJQUM1QixNQUFNLENBQUNHLGVBQWVDLGlCQUFpQixHQUFHVCxxREFBYyxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWixxREFBYyxDQUFDLENBQUM7SUFDbERBLHNEQUFlLENBQUMsSUFBTTtRQUNwQk8sUUFDR08sWUFBWSxHQUNaQyxJQUFJLENBQUMsQ0FBQ0MsUUFBVTtZQUNmQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLElBQUk7WUFDdEIsTUFBTUMsaUJBQWlCO2dCQUFFLEdBQUdULFNBQVM7WUFBQztZQUN0Q0ssTUFBTUcsSUFBSSxDQUFDRSxPQUFPLENBQUMsQ0FBQ0MsUUFBVTtnQkFDNUIsSUFBSSxDQUFDRixjQUFjLENBQUNFLE1BQU1DLFFBQVEsQ0FBQyxFQUFFO29CQUNuQ0gsY0FBYyxDQUFDRSxNQUFNQyxRQUFRLENBQUMsR0FBRyxFQUFFO2dCQUNyQyxDQUFDOztnQkFDREgsY0FBYyxDQUFDRSxNQUFNQyxRQUFRLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRjtZQUN0QztZQUNBVixhQUFhUTtRQUNmO0lBQ0osR0FDRSxFQUFFO0lBRUoscUJBQ0U7a0JBQ0UsNEVBQUNLO1lBQUlDLE9BQU87Z0JBQ1ZDLFNBQVM7Z0JBQ1RDLGVBQWU7Z0JBQ2ZDLE1BQU07WUFDUjs7OEJBQ0UsOERBQUMxQiw0REFBSUE7b0JBQUNLLGVBQWVBO29CQUFlQyxrQkFBa0JBOzs7Ozs7OEJBQ3RELDhEQUFDcUI7Ozs7OzhCQUNELDhEQUFDQztvQkFBU0MsYUFBYXhCO29CQUFlRyxXQUFXQTs4QkFBVzs7Ozs7Ozs7Ozs7OztBQUlwRTtHQWxDU0w7S0FBQUE7QUFvQ1QsK0RBQWVBLFFBQVFBLEVBQUM7QUFFeEIsTUFBTTJCLGVBQWUvQix3RUFBVTs7O3NCQUNQLFNBQWVnQztRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNQyxnQkFBZ0I7QUFBRDtNQUR0REY7QUFnQk4sTUFBTUcsZUFBZWxDLHdFQUFVOzs7dUJBRUgsU0FBWW1DO1FBQVgsRUFBRUEsR0FBRSxFQUFFO1dBQUtBO0FBQUM7TUFGbkNEO0FBUU4sU0FBU04sU0FBUztJQUNoQixxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDRztnQkFBYUMsSUFBSXBDLGdEQUFhOzs7Ozs7MEJBQy9CLDhEQUFDc0M7Z0JBQVFDLFdBQVU7O2tDQUNqQiw4REFBQ0M7d0JBQUlDLEtBQUssc0JBQW9DLE9BQWR6QyxnREFBYSxFQUFDOzs7Ozs7a0NBQzlDLDhEQUFDd0I7OzBDQUNDLDhEQUFDbUI7MENBQUkzQyw4Q0FBVzs7Ozs7OzBDQUNoQiw4REFBQzZDOzBDQUFHN0MscURBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEM7TUFiUzZCO0FBZVQsU0FBU0MsU0FBUyxLQUFnQyxFQUFFO1FBQWxDLEVBQUVDLFlBQVcsRUFBRSxHQUFHZ0IsY0FBYyxHQUFoQztJQUNoQixNQUFNQyxnQkFBZ0JDLE9BQU9DLElBQUksQ0FBQ0gsYUFBYXJDLFNBQVM7SUFDeEQscUJBQ0UsOERBQUNQLG9FQUFjQTtrQkFDWjZDLGNBQWNHLEdBQUcsQ0FBQyxDQUFDQyxlQUFpQjtZQUNuQyxNQUFNQyxTQUFTTixhQUFhckMsU0FBUyxDQUFDMEMsYUFBYTtZQUNuRCxxQkFDRSw4REFBQ2Q7O2tDQUNDLDhEQUFDSztrQ0FBSVM7Ozs7OztrQ0FDTCw4REFBQzVCO2tDQUNFNkIsT0FDRUMsTUFBTSxDQUFDLENBQUNqQyxRQUFVOzRCQUNqQixNQUFNa0Msa0JBQWtCbEMsTUFBTW1DLEtBQUssQ0FBQ0MsV0FBVzs0QkFDL0MsTUFBTUMsd0JBQXdCM0IsWUFBWTBCLFdBQVc7NEJBQ3JELE9BQU9GLGdCQUFnQkksUUFBUSxDQUFDRDt3QkFDbEMsR0FDQ1AsR0FBRyxDQUFDLENBQUM5QixRQUFVOzRCQUNkLHFCQUNFLDhEQUFDdUM7Z0NBQWtCQyxNQUFNeEMsTUFBTXlDLEdBQUc7O2tEQUNoQyw4REFBQ3RCO3dDQUFJQyxLQUFLcEIsTUFBTTBDLEtBQUs7Ozs7OztrREFDckIsOERBQUNDO2tEQUFNM0MsTUFBTW1DLEtBQUs7Ozs7Ozs7K0JBRlpuQyxNQUFNeUMsR0FBRzs7Ozs7d0JBS3JCOzs7Ozs7O2VBaEJRVjs7Ozs7UUFxQmxCOzs7Ozs7QUFHTjtNQS9CU3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTWVudVwiO1xuaW1wb3J0IHsgU3R5bGVkVGltZWxpbmUgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmVcIjtcbmltcG9ydCB7IHZpZGVvU2VydmljZSB9IGZyb20gXCIuLi9zcmMvc2VydmljZXMvdmlkZW9TZXJ2aWNlXCI7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBzZXJ2aWNlID0gdmlkZW9TZXJ2aWNlKCk7XG4gIGNvbnN0IFt2YWxvckRvRmlsdHJvLCBzZXRWYWxvckRvRmlsdHJvXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGxheWxpc3RzLCBzZXRQbGF5bGlzdHNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNlcnZpY2VcbiAgICAgIC5nZXRBbGxWaWRlb3MoKVxuICAgICAgLnRoZW4oKGRhZG9zKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhZG9zLmRhdGEpO1xuICAgICAgICBjb25zdCBub3Zhc1BsYXlsaXN0cyA9IHsgLi4ucGxheWxpc3RzIH07XG4gICAgICAgIGRhZG9zLmRhdGEuZm9yRWFjaCgodmlkZW8pID0+IHtcbiAgICAgICAgICBpZiAoIW5vdmFzUGxheWxpc3RzW3ZpZGVvLnBsYXlsaXN0XSkge1xuICAgICAgICAgICAgbm92YXNQbGF5bGlzdHNbdmlkZW8ucGxheWxpc3RdID0gW107XG4gICAgICAgICAgfTtcbiAgICAgICAgICBub3Zhc1BsYXlsaXN0c1t2aWRlby5wbGF5bGlzdF0ucHVzaCh2aWRlbyk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQbGF5bGlzdHMobm92YXNQbGF5bGlzdHMpO1xuICAgICAgfSk7XG4gIH0sXG4gICAgW10sXG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICB9fT5cbiAgICAgICAgPE1lbnUgdmFsb3JEb0ZpbHRybz17dmFsb3JEb0ZpbHRyb30gc2V0VmFsb3JEb0ZpbHRybz17c2V0VmFsb3JEb0ZpbHRyb30gLz5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8VGltZWxpbmUgc2VhcmNoVmFsdWU9e3ZhbG9yRG9GaWx0cm99IHBsYXlsaXN0cz17cGxheWxpc3RzfT5Db250ZcO6ZG88L1RpbWVsaW5lPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmRMZXZlbDF9O1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9O1xuICAgIC51c2VyLWluZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTZweCAzMnB4O1xuICAgICAgICBnYXA6IDE2cHg7XG4gICAgfTtcbmA7XG5cbmNvbnN0IFN0eWxlZEJhbm5lciA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsoeyBiZyB9KSA9PiBiZ30pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuYDtcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRIZWFkZXI+XG4gICAgICA8U3R5bGVkQmFubmVyIGJnPXtjb25maWcuYmFubmVyfSAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XG4gICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7Y29uZmlnLmdpdGh1Yn0ucG5nYH0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+e2NvbmZpZy5uYW1lfTwvaDI+XG4gICAgICAgICAgPHA+e2NvbmZpZy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvU3R5bGVkSGVhZGVyPlxuICApO1xufTtcblxuZnVuY3Rpb24gVGltZWxpbmUoeyBzZWFyY2hWYWx1ZSwgLi4ucHJvcHJpZWRhZGVzIH0pIHtcbiAgY29uc3QgcGxheWxpc3ROYW1lcyA9IE9iamVjdC5rZXlzKHByb3ByaWVkYWRlcy5wbGF5bGlzdHMpO1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRUaW1lbGluZT5cbiAgICAgIHtwbGF5bGlzdE5hbWVzLm1hcCgocGxheWxpc3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHByb3ByaWVkYWRlcy5wbGF5bGlzdHNbcGxheWxpc3ROYW1lXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c2VjdGlvbiBrZXk9e3BsYXlsaXN0TmFtZX0+XG4gICAgICAgICAgICA8aDI+e3BsYXlsaXN0TmFtZX08L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge3ZpZGVvc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHZpZGVvKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZU5vcm1hbGl6ZWQgPSB2aWRlby50aXRsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoVmFsdWVOb3JtYWxpemVkID0gc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aXRsZU5vcm1hbGl6ZWQuaW5jbHVkZXMoc2VhcmNoVmFsdWVOb3JtYWxpemVkKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoKHZpZGVvKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8YSBrZXk9e3ZpZGVvLnVybH0gaHJlZj17dmlkZW8udXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dmlkZW8udGh1bWJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3ZpZGVvLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L1N0eWxlZFRpbWVsaW5lPlxuICApO1xufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25maWciLCJzdHlsZWQiLCJNZW51IiwiU3R5bGVkVGltZWxpbmUiLCJ2aWRlb1NlcnZpY2UiLCJIb21lUGFnZSIsInNlcnZpY2UiLCJ2YWxvckRvRmlsdHJvIiwic2V0VmFsb3JEb0ZpbHRybyIsInVzZVN0YXRlIiwicGxheWxpc3RzIiwic2V0UGxheWxpc3RzIiwidXNlRWZmZWN0IiwiZ2V0QWxsVmlkZW9zIiwidGhlbiIsImRhZG9zIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJub3Zhc1BsYXlsaXN0cyIsImZvckVhY2giLCJ2aWRlbyIsInBsYXlsaXN0IiwicHVzaCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiSGVhZGVyIiwiVGltZWxpbmUiLCJzZWFyY2hWYWx1ZSIsIlN0eWxlZEhlYWRlciIsInRoZW1lIiwiYmFja2dyb3VuZExldmVsMSIsIlN0eWxlZEJhbm5lciIsImJnIiwiYmFubmVyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImdpdGh1YiIsImgyIiwibmFtZSIsInAiLCJkZXNjcmlwdGlvbiIsInByb3ByaWVkYWRlcyIsInBsYXlsaXN0TmFtZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicGxheWxpc3ROYW1lIiwidmlkZW9zIiwiZmlsdGVyIiwidGl0bGVOb3JtYWxpemVkIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaFZhbHVlTm9ybWFsaXplZCIsImluY2x1ZGVzIiwiYSIsImhyZWYiLCJ1cmwiLCJ0aHVtYiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
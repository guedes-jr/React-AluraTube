"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/RegisterVideo/index.js":
/*!***********************************************!*\
  !*** ./src/components/RegisterVideo/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/RegisterVideo/styles.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction useForm(propsDoForm) {\n    _s();\n    const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(propsDoForm.initialValues);\n    return {\n        values,\n        handleChange: (evento)=>{\n            const value = evento.target.value;\n            const name = evento.target.name;\n            setValues({\n                ...values,\n                [name]: value\n            });\n        },\n        clearForm () {\n            setValues({});\n        }\n    };\n}\n_s(useForm, \"BIYExSth+WYKJ6/LYKi6Ip+Sfck=\");\nconst PROJECT_URL = \"https://avwfwhzeadrrarehnehq.supabase.co\";\nconst PUBLIC_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2d2Z3aHplYWRycmFyZWhuZWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA3NjY4NjQsImV4cCI6MTk4NjM0Mjg2NH0.QOxgTqLE8rXftsOiOUn20Gc8x9ZWQd_29NH7ap8NwOE\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__.createClient)(PROJECT_URL, PUBLIC_KEY);\nfunction getThumbnail(url) {\n    return \"https://img.youtube.com/vi/\".concat(url.split(\"v=\")[1], \"/hqdefault.jpg\");\n}\nfunction getVideoId(url) {\n    const videoId = url.split(\"v=\")[1];\n    const ampersandPosition = videoId.index0f(\"&\");\n    if (ampersandPosition !== -1) {\n        return videoId.substring(0, ampersandPosition);\n    }\n    return videoId;\n}\nfunction RegisterVideo() {\n    _s1();\n    const formCadastro = useForm({\n        initialValues: {\n            titulo: \"Next 13 vai TRANSFORMAR o front-end! (novas features)\",\n            url: \"https://www.youtube.com/watch?v=eyV8-dgv4pU&t=9s&ab_channel=Rocketseat\"\n        }\n    });\n    const [formVisivel, setFormVisivel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledRegisterVideo, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"add-video\",\n                onClick: ()=>setFormVisivel(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            formVisivel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (evento)=>{\n                    evento.preventDefault();\n                    supabase.from(\"video\").insert({\n                        titulo: formCadastro.values.titulo,\n                        url: formCadastro.values.url,\n                        thumb: getThumbnail(formCadastro.values.url),\n                        playlist: \"Jogos\"\n                    }).then((oqueveio)=>{\n                        console.log(oqueveio);\n                    }).catch((err)=>{\n                        console.log(err);\n                    });\n                    setFormVisivel(false);\n                    formCadastro.clearForm();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"close-modal\",\n                            onClick: ()=>setFormVisivel(false),\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"T\\xedtulo do v\\xeddeo\",\n                            name: \"titulo\",\n                            value: formCadastro.values.titulo,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Url do v\\xeddeo\",\n                            name: \"url\",\n                            value: formCadastro.values.url,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            name: \"playlist\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Anime\",\n                                    children: \"Anime\"\n                                }, void 0, false, {\n                                    fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Jogos\",\n                                    children: \"Jogos\"\n                                }, void 0, false, {\n                                    fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Programa\\xe7\\xe3o\",\n                                    children: \"Programa\\xe7\\xe3o\"\n                                }, void 0, false, {\n                                    fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, this),\n                        \"=\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 97,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                lineNumber: 57,\n                columnNumber: 11\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s1(RegisterVideo, \"D6rASRn6VaOT1KiQqEnUQ71Yqp8=\", false, function() {\n    return [\n        useForm\n    ];\n});\n_c = RegisterVideo;\nvar _c;\n$RefreshReg$(_c, \"RegisterVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDcUI7QUFDSztBQUdwRCxTQUFTRyxRQUFRQyxXQUFXLEVBQUU7O0lBQzVCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTixxREFBYyxDQUFDSSxZQUFZSSxhQUFhO0lBQ3BFLE9BQU87UUFDTEg7UUFDQUksY0FBYyxDQUFDQyxTQUFXO1lBQ3hCLE1BQU1DLFFBQVFELE9BQU9FLE1BQU0sQ0FBQ0QsS0FBSztZQUNqQyxNQUFNRSxPQUFPSCxPQUFPRSxNQUFNLENBQUNDLElBQUk7WUFDL0JQLFVBQVU7Z0JBQ1IsR0FBR0QsTUFBTTtnQkFDVCxDQUFDUSxLQUFLLEVBQUVGO1lBQ1Y7UUFDRjtRQUNBRyxhQUFZO1lBQ1ZSLFVBQVUsQ0FBQztRQUNiO0lBQ0Y7QUFDRjtHQWhCU0g7QUFrQlQsTUFBTVksY0FBYztBQUNwQixNQUFNQyxhQUFhO0FBQ25CLE1BQU1DLFdBQVdmLG1FQUFZQSxDQUFDYSxhQUFhQztBQUUzQyxTQUFTRSxhQUFhQyxHQUFHLEVBQUU7SUFDekIsT0FBTyw4QkFBaUQsT0FBbkJBLElBQUlDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDO0FBQzFEO0FBRUEsU0FBU0MsV0FBV0YsR0FBRyxFQUFFO0lBQ3ZCLE1BQU1HLFVBQVVILElBQUlDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUNsQyxNQUFNRyxvQkFBb0JELFFBQVFFLE9BQU8sQ0FBQztJQUMxQyxJQUFJRCxzQkFBc0IsQ0FBQyxHQUFHO1FBQzVCLE9BQU9ELFFBQVFHLFNBQVMsQ0FBQyxHQUFHRjtJQUM5QixDQUFDO0lBQ0QsT0FBT0Q7QUFDVDtBQUVlLFNBQVNJLGdCQUFnQjs7SUFDdEMsTUFBTUMsZUFBZXhCLFFBQVE7UUFDM0JLLGVBQWU7WUFDYm9CLFFBQVE7WUFDUlQsS0FBSztRQUNQO0lBQ0Y7SUFDQSxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBRzlCLHFEQUFjLENBQUMsS0FBSztJQUUxRCxxQkFDRSw4REFBQ0Msd0RBQW1CQTs7MEJBQ2xCLDhEQUFDOEI7Z0JBQU9DLFdBQVU7Z0JBQVlDLFNBQVMsSUFBTUgsZUFBZSxJQUFJOzBCQUFHOzs7Ozs7WUFHbEVELDRCQUVHLDhEQUFDSztnQkFBS0MsVUFBVSxDQUFDekIsU0FBVztvQkFDMUJBLE9BQU8wQixjQUFjO29CQUNyQm5CLFNBQVNvQixJQUFJLENBQUMsU0FBU0MsTUFBTSxDQUFDO3dCQUM1QlYsUUFBUUQsYUFBYXRCLE1BQU0sQ0FBQ3VCLE1BQU07d0JBQ2xDVCxLQUFLUSxhQUFhdEIsTUFBTSxDQUFDYyxHQUFHO3dCQUM1Qm9CLE9BQU9yQixhQUFhUyxhQUFhdEIsTUFBTSxDQUFDYyxHQUFHO3dCQUMzQ3FCLFVBQVU7b0JBQ1osR0FBR0MsSUFBSSxDQUFDLENBQUNDLFdBQWE7d0JBQ3BCQyxRQUFRQyxHQUFHLENBQUNGO29CQUNkLEdBQUdHLEtBQUssQ0FBQyxDQUFDQyxNQUFRO3dCQUNoQkgsUUFBUUMsR0FBRyxDQUFDRTtvQkFDZDtvQkFDQWhCLGVBQWUsS0FBSztvQkFDcEJILGFBQWFiLFNBQVM7Z0JBQ3hCOzBCQUNFLDRFQUFDaUM7O3NDQUNDLDhEQUFDaEI7NEJBQU9pQixNQUFLOzRCQUFTaEIsV0FBVTs0QkFBY0MsU0FBUyxJQUFNSCxlQUFlLEtBQUs7c0NBQUc7Ozs7OztzQ0FHcEYsOERBQUNtQjs0QkFDQ0MsYUFBWTs0QkFDWnJDLE1BQUs7NEJBQ0xGLE9BQU9nQixhQUFhdEIsTUFBTSxDQUFDdUIsTUFBTTs0QkFDakN1QixVQUFVeEIsYUFBYWxCLFlBQVk7Ozs7OztzQ0FDckMsOERBQUN3Qzs0QkFDQ0MsYUFBWTs0QkFDWnJDLE1BQUs7NEJBQ0xGLE9BQU9nQixhQUFhdEIsTUFBTSxDQUFDYyxHQUFHOzRCQUM5QmdDLFVBQVV4QixhQUFhbEIsWUFBWTs7Ozs7O3NDQUNyQyw4REFBQzJDOzRCQUFPdkMsTUFBSzs7OENBQ1gsOERBQUN3QztvQ0FBTzFDLE9BQU07OENBQVE7Ozs7Ozs4Q0FHdEIsOERBQUMwQztvQ0FBTzFDLE9BQU07OENBQVE7Ozs7Ozs4Q0FHdEIsOERBQUMwQztvQ0FBTzFDLE9BQU07OENBQWM7Ozs7Ozs7Ozs7Ozt3QkFHckI7c0NBQ1QsOERBQUNvQjs0QkFBT2lCLE1BQUs7c0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBTTNCLElBQUk7Ozs7Ozs7QUFJZCxDQUFDO0lBbEV1QnRCOztRQUNEdkI7OztLQURDdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVnaXN0ZXJWaWRlby9pbmRleC5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlZFJlZ2lzdGVyVmlkZW8gfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuXG5mdW5jdGlvbiB1c2VGb3JtKHByb3BzRG9Gb3JtKSB7XG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZShwcm9wc0RvRm9ybS5pbml0aWFsVmFsdWVzKTtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZXMsXG4gICAgaGFuZGxlQ2hhbmdlOiAoZXZlbnRvKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50by50YXJnZXQudmFsdWU7XG4gICAgICBjb25zdCBuYW1lID0gZXZlbnRvLnRhcmdldC5uYW1lO1xuICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjbGVhckZvcm0oKSB7XG4gICAgICBzZXRWYWx1ZXMoe30pXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFBST0pFQ1RfVVJMID0gXCJodHRwczovL2F2d2Z3aHplYWRycmFyZWhuZWhxLnN1cGFiYXNlLmNvXCJcbmNvbnN0IFBVQkxJQ19LRVkgPSBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwYzNNaU9pSnpkWEJoWW1GelpTSXNJbkpsWmlJNkltRjJkMlozYUhwbFlXUnljbUZ5WldodVpXaHhJaXdpY205c1pTSTZJbUZ1YjI0aUxDSnBZWFFpT2pFMk56QTNOalk0TmpRc0ltVjRjQ0k2TVRrNE5qTTBNamcyTkgwLlFPeGdUcUxFOHJYZnRzT2lPVW4yMEdjOHg5WldRZF8yOU5IN2FwOE53T0VcIlxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoUFJPSkVDVF9VUkwsIFBVQkxJQ19LRVkpXG5cbmZ1bmN0aW9uIGdldFRodW1ibmFpbCh1cmwpIHtcbiAgcmV0dXJuIGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke3VybC5zcGxpdChcInY9XCIpWzFdfS9ocWRlZmF1bHQuanBnYFxufVxuXG5mdW5jdGlvbiBnZXRWaWRlb0lkKHVybCkge1xuICBjb25zdCB2aWRlb0lkID0gdXJsLnNwbGl0KFwidj1cIilbMV07XG4gIGNvbnN0IGFtcGVyc2FuZFBvc2l0aW9uID0gdmlkZW9JZC5pbmRleDBmKFwiJlwiKTtcbiAgaWYgKGFtcGVyc2FuZFBvc2l0aW9uICE9PSAtMSkge1xuICAgIHJldHVybiB2aWRlb0lkLnN1YnN0cmluZygwLCBhbXBlcnNhbmRQb3NpdGlvbik7XG4gIH1cbiAgcmV0dXJuIHZpZGVvSWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyVmlkZW8oKSB7XG4gIGNvbnN0IGZvcm1DYWRhc3RybyA9IHVzZUZvcm0oe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIHRpdHVsbzogXCJOZXh0IDEzIHZhaSBUUkFOU0ZPUk1BUiBvIGZyb250LWVuZCEgKG5vdmFzIGZlYXR1cmVzKVwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZXlWOC1kZ3Y0cFUmdD05cyZhYl9jaGFubmVsPVJvY2tldHNlYXRcIlxuICAgIH1cbiAgfSk7XG4gIGNvbnN0IFtmb3JtVmlzaXZlbCwgc2V0Rm9ybVZpc2l2ZWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFJlZ2lzdGVyVmlkZW8+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC12aWRlb1wiIG9uQ2xpY2s9eygpID0+IHNldEZvcm1WaXNpdmVsKHRydWUpfT5cbiAgICAgICAgK1xuICAgICAgPC9idXR0b24+XG4gICAgICB7Zm9ybVZpc2l2ZWxcbiAgICAgICAgPyAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhldmVudG8pID0+IHtcbiAgICAgICAgICAgIGV2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3VwYWJhc2UuZnJvbShcInZpZGVvXCIpLmluc2VydCh7XG4gICAgICAgICAgICAgIHRpdHVsbzogZm9ybUNhZGFzdHJvLnZhbHVlcy50aXR1bG8sXG4gICAgICAgICAgICAgIHVybDogZm9ybUNhZGFzdHJvLnZhbHVlcy51cmwsXG4gICAgICAgICAgICAgIHRodW1iOiBnZXRUaHVtYm5haWwoZm9ybUNhZGFzdHJvLnZhbHVlcy51cmwpLFxuICAgICAgICAgICAgICBwbGF5bGlzdDogXCJKb2dvc1wiXG4gICAgICAgICAgICB9KS50aGVuKChvcXVldmVpbykgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcXVldmVpbylcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZvcm1WaXNpdmVsKGZhbHNlKTtcbiAgICAgICAgICAgIGZvcm1DYWRhc3Ryby5jbGVhckZvcm0oKTtcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCIgb25DbGljaz17KCkgPT4gc2V0Rm9ybVZpc2l2ZWwoZmFsc2UpfT5cbiAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlTDrXR1bG8gZG8gdsOtZGVvXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0dWxvXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUNhZGFzdHJvLnZhbHVlcy50aXR1bG99XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1DYWRhc3Ryby5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXJsIGRvIHbDrWRlb1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1DYWRhc3Ryby52YWx1ZXMudXJsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtQ2FkYXN0cm8uaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwbGF5bGlzdFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbmltZVwiPlxuICAgICAgICAgICAgICAgICAgQW5pbWVcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSm9nb3NcIj5cbiAgICAgICAgICAgICAgICAgIEpvZ29zXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlByb2dyYW1hw6fDo29cIj5cbiAgICAgICAgICAgICAgICAgIFByb2dyYW1hw6fDo29cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+PVxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiA+XG4gICAgICAgICAgICAgICAgQ2FkYXN0cmFyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgICAgIDogbnVsbFxuICAgICAgfVxuICAgIDwvU3R5bGVkUmVnaXN0ZXJWaWRlbyA+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHlsZWRSZWdpc3RlclZpZGVvIiwiY3JlYXRlQ2xpZW50IiwidXNlRm9ybSIsInByb3BzRG9Gb3JtIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJpbml0aWFsVmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnRvIiwidmFsdWUiLCJ0YXJnZXQiLCJuYW1lIiwiY2xlYXJGb3JtIiwiUFJPSkVDVF9VUkwiLCJQVUJMSUNfS0VZIiwic3VwYWJhc2UiLCJnZXRUaHVtYm5haWwiLCJ1cmwiLCJzcGxpdCIsImdldFZpZGVvSWQiLCJ2aWRlb0lkIiwiYW1wZXJzYW5kUG9zaXRpb24iLCJpbmRleDBmIiwic3Vic3RyaW5nIiwiUmVnaXN0ZXJWaWRlbyIsImZvcm1DYWRhc3RybyIsInRpdHVsbyIsImZvcm1WaXNpdmVsIiwic2V0Rm9ybVZpc2l2ZWwiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmcm9tIiwiaW5zZXJ0IiwidGh1bWIiLCJwbGF5bGlzdCIsInRoZW4iLCJvcXVldmVpbyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImRpdiIsInR5cGUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJzZWxlY3QiLCJvcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo/index.js\n"));

/***/ })

});
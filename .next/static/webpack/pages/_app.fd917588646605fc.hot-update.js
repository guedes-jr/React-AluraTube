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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/RegisterVideo/styles.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction useForm(propsDoForm) {\n    _s();\n    const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(propsDoForm.initialValues);\n    return {\n        values,\n        handleChange: (evento)=>{\n            const value = evento.target.value;\n            const name = evento.target.name;\n            setValues({\n                ...values,\n                [name]: value\n            });\n        },\n        clearForm () {\n            setValues({});\n        }\n    };\n}\n_s(useForm, \"BIYExSth+WYKJ6/LYKi6Ip+Sfck=\");\nsrc / comp;\nconst PROJECT_URL = \"https://avwfwhzeadrrarehnehq.supabase.co\";\nconst PUBLIC_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2d2Z3aHplYWRycmFyZWhuZWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA3NjY4NjQsImV4cCI6MTk4NjM0Mjg2NH0.QOxgTqLE8rXftsOiOUn20Gc8x9ZWQd_29NH7ap8NwOE\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__.createClient)(PROJECT_URL, PUBLIC_KEY);\nfunction getThumbnail(url) {\n    return \"https://img.youtube.com/vi/\".concat(url.split(\"v=\")[1], \"/hqdefault.jpg\");\n}\nfunction getVideoId(url) {\n    const videoId = url.split(\"v=\")[1];\n    const ampersandPosition = videoId.index0f(\"&\");\n    if (ampersandPosition !== -1) {\n        return videoId.substring(0, ampersandPosition);\n    }\n    return videoId;\n}\nfunction RegisterVideo() {\n    _s1();\n    const formCadastro = useForm({\n        initialValues: {\n            titulo: \"PAR\\xd3DIA DO MLK MOTOSSERA - O CARA MAIS SIMPLES DO MUNDO\",\n            url: \"https://www.youtube.com/watch?v=cMDXM5yE5oE\",\n            playlist: \"Anime\"\n        }\n    });\n    const [formVisivel, setFormVisivel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledRegisterVideo, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"add-video\",\n                onClick: ()=>setFormVisivel(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            formVisivel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (evento)=>{\n                    evento.preventDefault();\n                    supabase.from(\"video\").insert({\n                        titulo: formCadastro.values.titulo,\n                        url: formCadastro.values.url,\n                        thumb: getThumbnail(formCadastro.values.url),\n                        playlist: formCadastro.values.playlist\n                    }).then((oqueveio)=>{\n                        console.log(oqueveio);\n                    }).catch((err)=>{\n                        console.log(err);\n                    });\n                    setFormVisivel(false);\n                    formCadastro.clearForm();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"close-modal\",\n                            onClick: ()=>setFormVisivel(false),\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"T\\xedtulo do v\\xeddeo\",\n                            name: \"titulo\",\n                            value: formCadastro.values.titulo,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Url do v\\xeddeo\",\n                            name: \"url\",\n                            value: formCadastro.values.url,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 82,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            name: \"playlist\",\n                            onChange: formCadastro.handleChange,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Anime\",\n                                    children: \"Anime\"\n                                }, void 0, false, {\n                                    fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Jogos\",\n                                    children: \"Jogos\"\n                                }, void 0, false, {\n                                    fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Programa\\xe7\\xe3o\",\n                                    children: \"Programa\\xe7\\xe3o\"\n                                }, void 0, false, {\n                                    fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 98,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                lineNumber: 58,\n                columnNumber: 11\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s1(RegisterVideo, \"D6rASRn6VaOT1KiQqEnUQ71Yqp8=\", false, function() {\n    return [\n        useForm\n    ];\n});\n_c = RegisterVideo;\nvar _c;\n$RefreshReg$(_c, \"RegisterVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDcUI7QUFDSztBQUdwRCxTQUFTRyxRQUFRQyxXQUFXLEVBQUU7O0lBQzVCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTixxREFBYyxDQUFDSSxZQUFZSSxhQUFhO0lBQ3BFLE9BQU87UUFDTEg7UUFDQUksY0FBYyxDQUFDQyxTQUFXO1lBQ3hCLE1BQU1DLFFBQVFELE9BQU9FLE1BQU0sQ0FBQ0QsS0FBSztZQUNqQyxNQUFNRSxPQUFPSCxPQUFPRSxNQUFNLENBQUNDLElBQUk7WUFDL0JQLFVBQVU7Z0JBQ1IsR0FBR0QsTUFBTTtnQkFDVCxDQUFDUSxLQUFLLEVBQUVGO1lBQ1Y7UUFDRjtRQUNBRyxhQUFZO1lBQ1ZSLFVBQVUsQ0FBQztRQUNiO0lBQ0Y7QUFDRjtHQWhCU0g7QUFpQlRZLE1BQUlDO0FBQ0osTUFBTUMsY0FBYztBQUNwQixNQUFNQyxhQUFhO0FBQ25CLE1BQU1DLFdBQVdqQixtRUFBWUEsQ0FBQ2UsYUFBYUM7QUFFM0MsU0FBU0UsYUFBYUMsR0FBRyxFQUFFO0lBQ3pCLE9BQU8sOEJBQWlELE9BQW5CQSxJQUFJQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQztBQUMxRDtBQUVBLFNBQVNDLFdBQVdGLEdBQUcsRUFBRTtJQUN2QixNQUFNRyxVQUFVSCxJQUFJQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDbEMsTUFBTUcsb0JBQW9CRCxRQUFRRSxPQUFPLENBQUM7SUFDMUMsSUFBSUQsc0JBQXNCLENBQUMsR0FBRztRQUM1QixPQUFPRCxRQUFRRyxTQUFTLENBQUMsR0FBR0Y7SUFDOUIsQ0FBQztJQUNELE9BQU9EO0FBQ1Q7QUFFZSxTQUFTSSxnQkFBZ0I7O0lBQ3RDLE1BQU1DLGVBQWUxQixRQUFRO1FBQzNCSyxlQUFlO1lBQ2JzQixRQUFRO1lBQ1JULEtBQUs7WUFDTFUsVUFBVTtRQUNaO0lBQ0Y7SUFDQSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2pDLHFEQUFjLENBQUMsS0FBSztJQUUxRCxxQkFDRSw4REFBQ0Msd0RBQW1CQTs7MEJBQ2xCLDhEQUFDaUM7Z0JBQU9DLFdBQVU7Z0JBQVlDLFNBQVMsSUFBTUgsZUFBZSxJQUFJOzBCQUFHOzs7Ozs7WUFHbEVELDRCQUVHLDhEQUFDSztnQkFBS0MsVUFBVSxDQUFDNUIsU0FBVztvQkFDMUJBLE9BQU82QixjQUFjO29CQUNyQnBCLFNBQVNxQixJQUFJLENBQUMsU0FBU0MsTUFBTSxDQUFDO3dCQUM1QlgsUUFBUUQsYUFBYXhCLE1BQU0sQ0FBQ3lCLE1BQU07d0JBQ2xDVCxLQUFLUSxhQUFheEIsTUFBTSxDQUFDZ0IsR0FBRzt3QkFDNUJxQixPQUFPdEIsYUFBYVMsYUFBYXhCLE1BQU0sQ0FBQ2dCLEdBQUc7d0JBQzNDVSxVQUFVRixhQUFheEIsTUFBTSxDQUFDMEIsUUFBUTtvQkFDeEMsR0FBR1ksSUFBSSxDQUFDLENBQUNDLFdBQWE7d0JBQ3BCQyxRQUFRQyxHQUFHLENBQUNGO29CQUNkLEdBQUdHLEtBQUssQ0FBQyxDQUFDQyxNQUFRO3dCQUNoQkgsUUFBUUMsR0FBRyxDQUFDRTtvQkFDZDtvQkFDQWYsZUFBZSxLQUFLO29CQUNwQkosYUFBYWYsU0FBUztnQkFDeEI7MEJBQ0UsNEVBQUNtQzs7c0NBQ0MsOERBQUNmOzRCQUFPZ0IsTUFBSzs0QkFBU2YsV0FBVTs0QkFBY0MsU0FBUyxJQUFNSCxlQUFlLEtBQUs7c0NBQUc7Ozs7OztzQ0FHcEYsOERBQUNrQjs0QkFDQ0MsYUFBWTs0QkFDWnZDLE1BQUs7NEJBQ0xGLE9BQU9rQixhQUFheEIsTUFBTSxDQUFDeUIsTUFBTTs0QkFDakN1QixVQUFVeEIsYUFBYXBCLFlBQVk7Ozs7OztzQ0FDckMsOERBQUMwQzs0QkFDQ0MsYUFBWTs0QkFDWnZDLE1BQUs7NEJBQ0xGLE9BQU9rQixhQUFheEIsTUFBTSxDQUFDZ0IsR0FBRzs0QkFDOUJnQyxVQUFVeEIsYUFBYXBCLFlBQVk7Ozs7OztzQ0FDckMsOERBQUM2Qzs0QkFBT3pDLE1BQUs7NEJBQVd3QyxVQUFVeEIsYUFBYXBCLFlBQVk7OzhDQUN6RCw4REFBQzhDO29DQUFPNUMsT0FBTTs4Q0FBUTs7Ozs7OzhDQUd0Qiw4REFBQzRDO29DQUFPNUMsT0FBTTs4Q0FBUTs7Ozs7OzhDQUd0Qiw4REFBQzRDO29DQUFPNUMsT0FBTTs4Q0FBYzs7Ozs7Ozs7Ozs7O3NDQUk5Qiw4REFBQ3VCOzRCQUFPZ0IsTUFBSztzQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFNM0IsSUFBSTs7Ozs7OztBQUlkLENBQUM7SUFuRXVCdEI7O1FBQ0R6Qjs7O0tBREN5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVkUmVnaXN0ZXJWaWRlbyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xuXG5cbmZ1bmN0aW9uIHVzZUZvcm0ocHJvcHNEb0Zvcm0pIHtcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzRG9Gb3JtLmluaXRpYWxWYWx1ZXMpO1xuICByZXR1cm4ge1xuICAgIHZhbHVlcyxcbiAgICBoYW5kbGVDaGFuZ2U6IChldmVudG8pID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnRvLnRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IG5hbWUgPSBldmVudG8udGFyZ2V0Lm5hbWU7XG4gICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNsZWFyRm9ybSgpIHtcbiAgICAgIHNldFZhbHVlcyh7fSlcbiAgICB9XG4gIH1cbn1cbnNyYy9jb21wXG5jb25zdCBQUk9KRUNUX1VSTCA9IFwiaHR0cHM6Ly9hdndmd2h6ZWFkcnJhcmVobmVocS5zdXBhYmFzZS5jb1wiXG5jb25zdCBQVUJMSUNfS0VZID0gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbUYyZDJaM2FIcGxZV1J5Y21GeVpXaHVaV2h4SWl3aWNtOXNaU0k2SW1GdWIyNGlMQ0pwWVhRaU9qRTJOekEzTmpZNE5qUXNJbVY0Y0NJNk1UazROak0wTWpnMk5IMC5RT3hnVHFMRThyWGZ0c09pT1VuMjBHYzh4OVpXUWRfMjlOSDdhcDhOd09FXCJcbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFBST0pFQ1RfVVJMLCBQVUJMSUNfS0VZKVxuXG5mdW5jdGlvbiBnZXRUaHVtYm5haWwodXJsKSB7XG4gIHJldHVybiBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHt1cmwuc3BsaXQoXCJ2PVwiKVsxXX0vaHFkZWZhdWx0LmpwZ2Bcbn1cblxuZnVuY3Rpb24gZ2V0VmlkZW9JZCh1cmwpIHtcbiAgY29uc3QgdmlkZW9JZCA9IHVybC5zcGxpdChcInY9XCIpWzFdO1xuICBjb25zdCBhbXBlcnNhbmRQb3NpdGlvbiA9IHZpZGVvSWQuaW5kZXgwZihcIiZcIik7XG4gIGlmIChhbXBlcnNhbmRQb3NpdGlvbiAhPT0gLTEpIHtcbiAgICByZXR1cm4gdmlkZW9JZC5zdWJzdHJpbmcoMCwgYW1wZXJzYW5kUG9zaXRpb24pO1xuICB9XG4gIHJldHVybiB2aWRlb0lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlclZpZGVvKCkge1xuICBjb25zdCBmb3JtQ2FkYXN0cm8gPSB1c2VGb3JtKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICB0aXR1bG86IFwiUEFSw5NESUEgRE8gTUxLIE1PVE9TU0VSQSAtIE8gQ0FSQSBNQUlTIFNJTVBMRVMgRE8gTVVORE9cIixcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWNNRFhNNXlFNW9FXCIsXG4gICAgICBwbGF5bGlzdDogXCJBbmltZVwiXG4gICAgfVxuICB9KTtcbiAgY29uc3QgW2Zvcm1WaXNpdmVsLCBzZXRGb3JtVmlzaXZlbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkUmVnaXN0ZXJWaWRlbz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXZpZGVvXCIgb25DbGljaz17KCkgPT4gc2V0Rm9ybVZpc2l2ZWwodHJ1ZSl9PlxuICAgICAgICArXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtmb3JtVmlzaXZlbFxuICAgICAgICA/IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGV2ZW50bykgPT4ge1xuICAgICAgICAgICAgZXZlbnRvLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzdXBhYmFzZS5mcm9tKFwidmlkZW9cIikuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgdGl0dWxvOiBmb3JtQ2FkYXN0cm8udmFsdWVzLnRpdHVsbyxcbiAgICAgICAgICAgICAgdXJsOiBmb3JtQ2FkYXN0cm8udmFsdWVzLnVybCxcbiAgICAgICAgICAgICAgdGh1bWI6IGdldFRodW1ibmFpbChmb3JtQ2FkYXN0cm8udmFsdWVzLnVybCksXG4gICAgICAgICAgICAgIHBsYXlsaXN0OiBmb3JtQ2FkYXN0cm8udmFsdWVzLnBsYXlsaXN0XG4gICAgICAgICAgICB9KS50aGVuKChvcXVldmVpbykgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcXVldmVpbylcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZvcm1WaXNpdmVsKGZhbHNlKTtcbiAgICAgICAgICAgIGZvcm1DYWRhc3Ryby5jbGVhckZvcm0oKTtcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCIgb25DbGljaz17KCkgPT4gc2V0Rm9ybVZpc2l2ZWwoZmFsc2UpfT5cbiAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlTDrXR1bG8gZG8gdsOtZGVvXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0dWxvXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUNhZGFzdHJvLnZhbHVlcy50aXR1bG99XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1DYWRhc3Ryby5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXJsIGRvIHbDrWRlb1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1DYWRhc3Ryby52YWx1ZXMudXJsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtQ2FkYXN0cm8uaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwbGF5bGlzdFwiIG9uQ2hhbmdlPXtmb3JtQ2FkYXN0cm8uaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQW5pbWVcIj5cbiAgICAgICAgICAgICAgICAgIEFuaW1lXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkpvZ29zXCI+XG4gICAgICAgICAgICAgICAgICBKb2dvc1xuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQcm9ncmFtYcOnw6NvXCI+XG4gICAgICAgICAgICAgICAgICBQcm9ncmFtYcOnw6NvXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiA+XG4gICAgICAgICAgICAgICAgQ2FkYXN0cmFyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgICAgIDogbnVsbFxuICAgICAgfVxuICAgIDwvU3R5bGVkUmVnaXN0ZXJWaWRlbyA+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHlsZWRSZWdpc3RlclZpZGVvIiwiY3JlYXRlQ2xpZW50IiwidXNlRm9ybSIsInByb3BzRG9Gb3JtIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJpbml0aWFsVmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnRvIiwidmFsdWUiLCJ0YXJnZXQiLCJuYW1lIiwiY2xlYXJGb3JtIiwic3JjIiwiY29tcCIsIlBST0pFQ1RfVVJMIiwiUFVCTElDX0tFWSIsInN1cGFiYXNlIiwiZ2V0VGh1bWJuYWlsIiwidXJsIiwic3BsaXQiLCJnZXRWaWRlb0lkIiwidmlkZW9JZCIsImFtcGVyc2FuZFBvc2l0aW9uIiwiaW5kZXgwZiIsInN1YnN0cmluZyIsIlJlZ2lzdGVyVmlkZW8iLCJmb3JtQ2FkYXN0cm8iLCJ0aXR1bG8iLCJwbGF5bGlzdCIsImZvcm1WaXNpdmVsIiwic2V0Rm9ybVZpc2l2ZWwiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmcm9tIiwiaW5zZXJ0IiwidGh1bWIiLCJ0aGVuIiwib3F1ZXZlaW8iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJkaXYiLCJ0eXBlIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwic2VsZWN0Iiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo/index.js\n"));

/***/ })

});
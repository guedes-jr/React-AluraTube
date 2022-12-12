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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/RegisterVideo/styles.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction useForm(propsDoForm) {\n    _s();\n    const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(propsDoForm.initialValues);\n    return {\n        values,\n        handleChange: (evento)=>{\n            const value = evento.target.value;\n            const name = evento.target.name;\n            setValues({\n                ...values,\n                [name]: value\n            });\n        },\n        clearForm () {\n            setValues({});\n        }\n    };\n}\n_s(useForm, \"BIYExSth+WYKJ6/LYKi6Ip+Sfck=\");\nconst PROJECT_URL = \"https://avwfwhzeadrrarehnehq.supabase.co\";\nconst PUBLIC_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2d2Z3aHplYWRycmFyZWhuZWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA3NjY4NjQsImV4cCI6MTk4NjM0Mjg2NH0.QOxgTqLE8rXftsOiOUn20Gc8x9ZWQd_29NH7ap8NwOE\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__.createClient)(PROJECT_URL, PUBLIC_KEY);\nfunction getThumbnail(url) {\n    return \"https://img.youtube.com/vi/\".concat(url.split(\"v=\")[1], \"/hqdefault.jpg\");\n}\nfunction getVideoId(url) {\n    const videoId = url.split(\"v=\")[1];\n    const ampersandPosition = videoId.index0f(\"&\");\n    if (ampersandPosition !== -1) {\n        return videoId.substring(0, ampersandPosition);\n    }\n    return videoId;\n}\nfunction RegisterVideo() {\n    _s1();\n    const formCadastro = useForm({\n        initialValues: {\n            titulo: \"Next 13 vai TRANSFORMAR o front-end! (novas features)\",\n            url: \"https://www.youtube.com/watch?v=eyV8-dgv4pU&t=9s&ab_channel=Rocketseat\"\n        }\n    });\n    const [formVisivel, setFormVisivel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledRegisterVideo, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"add-video\",\n                onClick: ()=>setFormVisivel(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            formVisivel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (evento)=>{\n                    evento.preventDefault();\n                    supabase.from(\"video\").insert({\n                        titulo: formCadastro.values.titulo,\n                        url: formCadastro.values.url,\n                        thumb: getThumbnail(formCadastro.values.url),\n                        playlist: \"Jogos\"\n                    }).then((oqueveio)=>{\n                        console.log(oqueveio);\n                    }).catch((err)=>{\n                        console.log(err);\n                    });\n                    setFormVisivel(false);\n                    formCadastro.clearForm();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"close-modal\",\n                            onClick: ()=>setFormVisivel(false),\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"T\\xedtulo do v\\xeddeo\",\n                            name: \"titulo\",\n                            value: formCadastro.values.titulo,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Url do v\\xeddeo\",\n                            name: \"url\",\n                            value: formCadastro.values.url,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            placeholder: \"Url do v\\xeddeo\",\n                            name: \"url\",\n                            value: formCadastro.values.url,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                            lineNumber: 91,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n                lineNumber: 57,\n                columnNumber: 11\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/home/junior/Documentos/Projects/AluraTube/src/components/RegisterVideo/index.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s1(RegisterVideo, \"D6rASRn6VaOT1KiQqEnUQ71Yqp8=\", false, function() {\n    return [\n        useForm\n    ];\n});\n_c = RegisterVideo;\nvar _c;\n$RefreshReg$(_c, \"RegisterVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDcUI7QUFDSztBQUdwRCxTQUFTRyxRQUFRQyxXQUFXLEVBQUU7O0lBQzVCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTixxREFBYyxDQUFDSSxZQUFZSSxhQUFhO0lBQ3BFLE9BQU87UUFDTEg7UUFDQUksY0FBYyxDQUFDQyxTQUFXO1lBQ3hCLE1BQU1DLFFBQVFELE9BQU9FLE1BQU0sQ0FBQ0QsS0FBSztZQUNqQyxNQUFNRSxPQUFPSCxPQUFPRSxNQUFNLENBQUNDLElBQUk7WUFDL0JQLFVBQVU7Z0JBQ1IsR0FBR0QsTUFBTTtnQkFDVCxDQUFDUSxLQUFLLEVBQUVGO1lBQ1Y7UUFDRjtRQUNBRyxhQUFZO1lBQ1ZSLFVBQVUsQ0FBQztRQUNiO0lBQ0Y7QUFDRjtHQWhCU0g7QUFrQlQsTUFBTVksY0FBYztBQUNwQixNQUFNQyxhQUFhO0FBQ25CLE1BQU1DLFdBQVdmLG1FQUFZQSxDQUFDYSxhQUFhQztBQUUzQyxTQUFTRSxhQUFhQyxHQUFHLEVBQUU7SUFDekIsT0FBTyw4QkFBaUQsT0FBbkJBLElBQUlDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDO0FBQzFEO0FBRUEsU0FBU0MsV0FBV0YsR0FBRyxFQUFFO0lBQ3ZCLE1BQU1HLFVBQVVILElBQUlDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUNsQyxNQUFNRyxvQkFBb0JELFFBQVFFLE9BQU8sQ0FBQztJQUMxQyxJQUFJRCxzQkFBc0IsQ0FBQyxHQUFHO1FBQzVCLE9BQU9ELFFBQVFHLFNBQVMsQ0FBQyxHQUFHRjtJQUM5QixDQUFDO0lBQ0QsT0FBT0Q7QUFDVDtBQUVlLFNBQVNJLGdCQUFnQjs7SUFDdEMsTUFBTUMsZUFBZXhCLFFBQVE7UUFDM0JLLGVBQWU7WUFDYm9CLFFBQVE7WUFDUlQsS0FBSztRQUNQO0lBQ0Y7SUFDQSxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBRzlCLHFEQUFjLENBQUMsS0FBSztJQUUxRCxxQkFDRSw4REFBQ0Msd0RBQW1CQTs7MEJBQ2xCLDhEQUFDOEI7Z0JBQU9DLFdBQVU7Z0JBQVlDLFNBQVMsSUFBTUgsZUFBZSxJQUFJOzBCQUFHOzs7Ozs7WUFHbEVELDRCQUVHLDhEQUFDSztnQkFBS0MsVUFBVSxDQUFDekIsU0FBVztvQkFDMUJBLE9BQU8wQixjQUFjO29CQUNyQm5CLFNBQVNvQixJQUFJLENBQUMsU0FBU0MsTUFBTSxDQUFDO3dCQUM1QlYsUUFBUUQsYUFBYXRCLE1BQU0sQ0FBQ3VCLE1BQU07d0JBQ2xDVCxLQUFLUSxhQUFhdEIsTUFBTSxDQUFDYyxHQUFHO3dCQUM1Qm9CLE9BQU9yQixhQUFhUyxhQUFhdEIsTUFBTSxDQUFDYyxHQUFHO3dCQUMzQ3FCLFVBQVU7b0JBQ1osR0FBR0MsSUFBSSxDQUFDLENBQUNDLFdBQWE7d0JBQ3BCQyxRQUFRQyxHQUFHLENBQUNGO29CQUNkLEdBQUdHLEtBQUssQ0FBQyxDQUFDQyxNQUFRO3dCQUNoQkgsUUFBUUMsR0FBRyxDQUFDRTtvQkFDZDtvQkFDQWhCLGVBQWUsS0FBSztvQkFDcEJILGFBQWFiLFNBQVM7Z0JBQ3hCOzBCQUNFLDRFQUFDaUM7O3NDQUNDLDhEQUFDaEI7NEJBQU9pQixNQUFLOzRCQUFTaEIsV0FBVTs0QkFBY0MsU0FBUyxJQUFNSCxlQUFlLEtBQUs7c0NBQUc7Ozs7OztzQ0FHcEYsOERBQUNtQjs0QkFDQ0MsYUFBWTs0QkFDWnJDLE1BQUs7NEJBQ0xGLE9BQU9nQixhQUFhdEIsTUFBTSxDQUFDdUIsTUFBTTs0QkFDakN1QixVQUFVeEIsYUFBYWxCLFlBQVk7Ozs7OztzQ0FDckMsOERBQUN3Qzs0QkFDQ0MsYUFBWTs0QkFDWnJDLE1BQUs7NEJBQ0xGLE9BQU9nQixhQUFhdEIsTUFBTSxDQUFDYyxHQUFHOzRCQUM5QmdDLFVBQVV4QixhQUFhbEIsWUFBWTs7Ozs7O3NDQUNyQyw4REFBQzJDOzRCQUNDRixhQUFZOzRCQUNackMsTUFBSzs0QkFDTEYsT0FBT2dCLGFBQWF0QixNQUFNLENBQUNjLEdBQUc7NEJBQzlCZ0MsVUFBVXhCLGFBQWFsQixZQUFZOzs7Ozs7c0NBQ3JDLDhEQUFDc0I7NEJBQU9pQixNQUFLO3NDQUFVOzs7Ozs7Ozs7Ozs7Ozs7O3VCQU0zQixJQUFJOzs7Ozs7O0FBSWQsQ0FBQztJQTVEdUJ0Qjs7UUFDRHZCOzs7S0FEQ3VCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlZ2lzdGVyVmlkZW8vaW5kZXguanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZWRSZWdpc3RlclZpZGVvIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXG5cblxuZnVuY3Rpb24gdXNlRm9ybShwcm9wc0RvRm9ybSkge1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUocHJvcHNEb0Zvcm0uaW5pdGlhbFZhbHVlcyk7XG4gIHJldHVybiB7XG4gICAgdmFsdWVzLFxuICAgIGhhbmRsZUNoYW5nZTogKGV2ZW50bykgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudG8udGFyZ2V0LnZhbHVlO1xuICAgICAgY29uc3QgbmFtZSA9IGV2ZW50by50YXJnZXQubmFtZTtcbiAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2xlYXJGb3JtKCkge1xuICAgICAgc2V0VmFsdWVzKHt9KVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBQUk9KRUNUX1VSTCA9IFwiaHR0cHM6Ly9hdndmd2h6ZWFkcnJhcmVobmVocS5zdXBhYmFzZS5jb1wiXG5jb25zdCBQVUJMSUNfS0VZID0gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbUYyZDJaM2FIcGxZV1J5Y21GeVpXaHVaV2h4SWl3aWNtOXNaU0k2SW1GdWIyNGlMQ0pwWVhRaU9qRTJOekEzTmpZNE5qUXNJbVY0Y0NJNk1UazROak0wTWpnMk5IMC5RT3hnVHFMRThyWGZ0c09pT1VuMjBHYzh4OVpXUWRfMjlOSDdhcDhOd09FXCJcbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFBST0pFQ1RfVVJMLCBQVUJMSUNfS0VZKVxuXG5mdW5jdGlvbiBnZXRUaHVtYm5haWwodXJsKSB7XG4gIHJldHVybiBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHt1cmwuc3BsaXQoXCJ2PVwiKVsxXX0vaHFkZWZhdWx0LmpwZ2Bcbn1cblxuZnVuY3Rpb24gZ2V0VmlkZW9JZCh1cmwpIHtcbiAgY29uc3QgdmlkZW9JZCA9IHVybC5zcGxpdChcInY9XCIpWzFdO1xuICBjb25zdCBhbXBlcnNhbmRQb3NpdGlvbiA9IHZpZGVvSWQuaW5kZXgwZihcIiZcIik7XG4gIGlmIChhbXBlcnNhbmRQb3NpdGlvbiAhPT0gLTEpIHtcbiAgICByZXR1cm4gdmlkZW9JZC5zdWJzdHJpbmcoMCwgYW1wZXJzYW5kUG9zaXRpb24pO1xuICB9XG4gIHJldHVybiB2aWRlb0lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlclZpZGVvKCkge1xuICBjb25zdCBmb3JtQ2FkYXN0cm8gPSB1c2VGb3JtKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICB0aXR1bG86IFwiTmV4dCAxMyB2YWkgVFJBTlNGT1JNQVIgbyBmcm9udC1lbmQhIChub3ZhcyBmZWF0dXJlcylcIixcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWV5VjgtZGd2NHBVJnQ9OXMmYWJfY2hhbm5lbD1Sb2NrZXRzZWF0XCJcbiAgICB9XG4gIH0pO1xuICBjb25zdCBbZm9ybVZpc2l2ZWwsIHNldEZvcm1WaXNpdmVsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRSZWdpc3RlclZpZGVvPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtdmlkZW9cIiBvbkNsaWNrPXsoKSA9PiBzZXRGb3JtVmlzaXZlbCh0cnVlKX0+XG4gICAgICAgICtcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge2Zvcm1WaXNpdmVsXG4gICAgICAgID8gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZXZlbnRvKSA9PiB7XG4gICAgICAgICAgICBldmVudG8ucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN1cGFiYXNlLmZyb20oXCJ2aWRlb1wiKS5pbnNlcnQoe1xuICAgICAgICAgICAgICB0aXR1bG86IGZvcm1DYWRhc3Ryby52YWx1ZXMudGl0dWxvLFxuICAgICAgICAgICAgICB1cmw6IGZvcm1DYWRhc3Ryby52YWx1ZXMudXJsLFxuICAgICAgICAgICAgICB0aHVtYjogZ2V0VGh1bWJuYWlsKGZvcm1DYWRhc3Ryby52YWx1ZXMudXJsKSxcbiAgICAgICAgICAgICAgcGxheWxpc3Q6IFwiSm9nb3NcIlxuICAgICAgICAgICAgfSkudGhlbigob3F1ZXZlaW8pID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cob3F1ZXZlaW8pXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGb3JtVmlzaXZlbChmYWxzZSk7XG4gICAgICAgICAgICBmb3JtQ2FkYXN0cm8uY2xlYXJGb3JtKCk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiIG9uQ2xpY2s9eygpID0+IHNldEZvcm1WaXNpdmVsKGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUw610dWxvIGRvIHbDrWRlb1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cInRpdHVsb1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1DYWRhc3Ryby52YWx1ZXMudGl0dWxvfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtQ2FkYXN0cm8uaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVybCBkbyB2w61kZW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtQ2FkYXN0cm8udmFsdWVzLnVybH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybUNhZGFzdHJvLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXJsIGRvIHbDrWRlb1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1DYWRhc3Ryby52YWx1ZXMudXJsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtQ2FkYXN0cm8uaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiA+XG4gICAgICAgICAgICAgICAgQ2FkYXN0cmFyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgICAgIDogbnVsbFxuICAgICAgfVxuICAgIDwvU3R5bGVkUmVnaXN0ZXJWaWRlbyA+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHlsZWRSZWdpc3RlclZpZGVvIiwiY3JlYXRlQ2xpZW50IiwidXNlRm9ybSIsInByb3BzRG9Gb3JtIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJpbml0aWFsVmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnRvIiwidmFsdWUiLCJ0YXJnZXQiLCJuYW1lIiwiY2xlYXJGb3JtIiwiUFJPSkVDVF9VUkwiLCJQVUJMSUNfS0VZIiwic3VwYWJhc2UiLCJnZXRUaHVtYm5haWwiLCJ1cmwiLCJzcGxpdCIsImdldFZpZGVvSWQiLCJ2aWRlb0lkIiwiYW1wZXJzYW5kUG9zaXRpb24iLCJpbmRleDBmIiwic3Vic3RyaW5nIiwiUmVnaXN0ZXJWaWRlbyIsImZvcm1DYWRhc3RybyIsInRpdHVsbyIsImZvcm1WaXNpdmVsIiwic2V0Rm9ybVZpc2l2ZWwiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmcm9tIiwiaW5zZXJ0IiwidGh1bWIiLCJwbGF5bGlzdCIsInRoZW4iLCJvcXVldmVpbyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImRpdiIsInR5cGUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJzZWxlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo/index.js\n"));

/***/ })

});
"use strict";
(self["webpackChunkweb_template"] = self["webpackChunkweb_template"] || []).push([["main"],{

/***/ "./src/App.style.scss":
/*!****************************!*\
  !*** ./src/App.style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.style.scss */ "./src/App.style.scss");
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monaco-editor/react */ "./node_modules/@monaco-editor/react/dist/index.mjs");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/hooks */ "./src/utils/hooks/index.ts");
/* harmony import */ var _monaco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monaco */ "./src/monaco.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @contexts */ "./src/contexts/index.ts");








function App() {
    var _a;
    const windowWidth = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_5__.useStorage)(document.body.clientWidth);
    const panelWidth = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_5__.useStorage)(windowWidth.value * .15);
    const fileContext = (0,_contexts__WEBPACK_IMPORTED_MODULE_7__.useFileSystemContext)();
    (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_5__.useWindowEvent)('resize', () => {
        windowWidth.set(document.body.clientWidth);
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.Panel, { width: panelWidth.value }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.ResizeBorder.Vertical, { maxValue: windowWidth.value * .8, storage: panelWidth }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "right", style: { width: `calc(100% - ${panelWidth.value}px)` }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__["default"], { loading: "", theme: _monaco__WEBPACK_IMPORTED_MODULE_6__.themeName, language: _monaco__WEBPACK_IMPORTED_MODULE_6__.languageName, options: { contextmenu: false }, value: (_a = fileContext.contentCurrent()) !== null && _a !== void 0 ? _a : '', onChange: (v) => fileContext.inputCurrent(v !== null && v !== void 0 ? v : ''), beforeMount: _monaco__WEBPACK_IMPORTED_MODULE_6__.edit, width: windowWidth.value - panelWidth.value }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "terminal" })] })] }));
}


/***/ }),

/***/ "./src/assets/language.json":
/*!**********************************!*\
  !*** ./src/assets/language.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"token":"string","foreground":"#ce9178"}]');

/***/ }),

/***/ "./src/assets/theme.json":
/*!*******************************!*\
  !*** ./src/assets/theme.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"activityBar.activeBorder":"#0078D4","activityBar.background":"#181818","activityBar.border":"#2B2B2B","activityBar.foreground":"#D7D7D7","activityBar.inactiveForeground":"#868686","activityBarBadge.background":"#0078D4","activityBarBadge.foreground":"#FFFFFF","badge.background":"#616161","badge.foreground":"#F8F8F8","button.background":"#0078D4","button.border":"#FFFFFF12","button.foreground":"#FFFFFF","button.hoverBackground":"#026EC1","button.secondaryBackground":"#313131","button.secondaryForeground":"#CCCCCC","button.secondaryHoverBackground":"#3C3C3C","chat.slashCommandBackground":"#34414B","chat.slashCommandForeground":"#40A6FF","checkbox.background":"#313131","checkbox.border":"#3C3C3C","debugToolBar.background":"#181818","descriptionForeground":"#9D9D9D","dropdown.background":"#313131","dropdown.border":"#3C3C3C","dropdown.foreground":"#CCCCCC","dropdown.listBackground":"#1F1F1F","editor.background":"#1F1F1F","editor.findMatchBackground":"#9E6A03","editor.foreground":"#CCCCCC","editorGroup.border":"#FFFFFF17","editorGroupHeader.tabsBackground":"#181818","editorGroupHeader.tabsBorder":"#2B2B2B","editorGutter.addedBackground":"#2EA043","editorGutter.deletedBackground":"#F85149","editorGutter.modifiedBackground":"#0078D4","editorLineNumber.activeForeground":"#CCCCCC","editorLineNumber.foreground":"#6E7681","editorOverviewRuler.border":"#010409","editorWidget.background":"#202020","errorForeground":"#F85149","focusBorder":"#1F1F1F","foreground":"#CCCCCC","icon.foreground":"#CCCCCC","input.background":"#313131","input.border":"#3C3C3C","input.foreground":"#CCCCCC","input.placeholderForeground":"#989898","inputOption.activeBackground":"#2489DB82","inputOption.activeBorder":"#2488DB","keybindingLabel.foreground":"#CCCCCC","menu.background":"#1F1F1F","menu.selectionBackground":"#0078d4","notificationCenterHeader.background":"#1F1F1F","notificationCenterHeader.foreground":"#CCCCCC","notifications.background":"#1F1F1F","notifications.border":"#2B2B2B","notifications.foreground":"#CCCCCC","panel.background":"#181818","panel.border":"#2B2B2B","panelInput.border":"#2B2B2B","panelTitle.activeBorder":"#0078D4","panelTitle.activeForeground":"#CCCCCC","panelTitle.inactiveForeground":"#9D9D9D","peekViewEditor.background":"#1F1F1F","peekViewEditor.matchHighlightBackground":"#BB800966","peekViewResult.background":"#1F1F1F","peekViewResult.matchHighlightBackground":"#BB800966","pickerGroup.border":"#3C3C3C","progressBar.background":"#0078D4","quickInput.background":"#222222","quickInput.foreground":"#CCCCCC","settings.dropdownBackground":"#313131","settings.dropdownBorder":"#3C3C3C","settings.headerForeground":"#FFFFFF","settings.modifiedItemIndicator":"#BB800966","sideBar.background":"#181818","sideBar.border":"#2B2B2B","sideBar.foreground":"#CCCCCC","sideBarSectionHeader.background":"#181818","sideBarSectionHeader.border":"#2B2B2B","sideBarSectionHeader.foreground":"#CCCCCC","sideBarTitle.foreground":"#CCCCCC","statusBar.background":"#181818","statusBar.border":"#2B2B2B","statusBar.debuggingBackground":"#0078D4","statusBar.debuggingForeground":"#FFFFFF","statusBar.focusBorder":"#0078D4","statusBar.foreground":"#CCCCCC","statusBar.noFolderBackground":"#1F1F1F","statusBarItem.focusBorder":"#0078D4","statusBarItem.prominentBackground":"#6E768166","statusBarItem.remoteBackground":"#0078D4","statusBarItem.remoteForeground":"#FFFFFF","tab.activeBackground":"#1F1F1F","tab.activeBorder":"#1F1F1F","tab.activeBorderTop":"#0078D4","tab.activeForeground":"#FFFFFF","tab.selectedBorderTop":"#6caddf","tab.border":"#2B2B2B","tab.hoverBackground":"#1F1F1F","tab.inactiveBackground":"#181818","tab.inactiveForeground":"#9D9D9D","tab.unfocusedActiveBorder":"#1F1F1F","tab.unfocusedActiveBorderTop":"#2B2B2B","tab.unfocusedHoverBackground":"#1F1F1F","terminal.foreground":"#CCCCCC","terminal.tab.activeBorder":"#0078D4","textBlockQuote.background":"#2B2B2B","textBlockQuote.border":"#616161","textCodeBlock.background":"#2B2B2B","textLink.activeForeground":"#4daafc","textLink.foreground":"#4daafc","textPreformat.foreground":"#D0D0D0","textPreformat.background":"#3C3C3C","textSeparator.foreground":"#21262D","titleBar.activeBackground":"#181818","titleBar.activeForeground":"#CCCCCC","titleBar.border":"#2B2B2B","titleBar.inactiveBackground":"#1F1F1F","titleBar.inactiveForeground":"#9D9D9D","welcomePage.tileBackground":"#2B2B2B","welcomePage.progress.foreground":"#0078D4","widget.border":"#313131"}');

/***/ }),

/***/ "./src/components/ContextMenu/ContextMenu.styles.scss":
/*!************************************************************!*\
  !*** ./src/components/ContextMenu/ContextMenu.styles.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ContextMenu/ContextMenu.tsx":
/*!****************************************************!*\
  !*** ./src/components/ContextMenu/ContextMenu.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenu: () => (/* binding */ ContextMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _ContextMenu_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextMenu.styles.scss */ "./src/components/ContextMenu/ContextMenu.styles.scss");



function ContextMenu(props) {
    if (props.x == null || props.y == null)
        return null;
    const position = { left: props.x + 'px', top: props.y + 'px' };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "context_menu_page_background", onClick: props.onClose, onMouseDownCapture: props.onClose }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "context_menu", style: position, children: props.options.map((option) => {
                    const onClick = () => {
                        option.action();
                        props.onClose();
                    };
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "context_menu__element", onClick: onClick, children: option.label }, option.label));
                }) })] }));
}


/***/ }),

/***/ "./src/components/Explorer/Explorer.styles.scss":
/*!******************************************************!*\
  !*** ./src/components/Explorer/Explorer.styles.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Explorer/Explorer.tsx":
/*!**********************************************!*\
  !*** ./src/components/Explorer/Explorer.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Explorer: () => (/* binding */ Explorer),
/* harmony export */   ExplorerItem: () => (/* binding */ ExplorerItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Explorer_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Explorer.styles.scss */ "./src/components/Explorer/Explorer.styles.scss");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contexts */ "./src/contexts/index.ts");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/hooks */ "./src/utils/hooks/index.ts");




function Explorer() {
    const contextMenu = (0,_contexts__WEBPACK_IMPORTED_MODULE_2__.useContextMenuContext)();
    const fileContext = (0,_contexts__WEBPACK_IMPORTED_MODULE_2__.useFileSystemContext)();
    const onContextMenu = (e) => {
        contextMenu.open(e, [
            { label: "Создать файл...", action: () => { fileContext.addFile(null); } },
            { label: "Создать папку...", action: () => { fileContext.addFolder(null); } }
        ]);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "explorer", onContextMenu: onContextMenu, children: fileContext.fs.map((item, i) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExplorerItem, { file: item, index: i, fsContext: fileContext }, item.id))) }));
}
function ExplorerItem(props) {
    const tempName = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_3__.useStorage)('');
    const contextMenu = (0,_contexts__WEBPACK_IMPORTED_MODULE_2__.useContextMenuContext)();
    const onContextMenu = (e) => {
        const options = [];
        switch (props.file.type) {
            case 'file': {
                options.push({ label: "Удалить файл", action: () => { } });
                break;
            }
            case 'folder': {
                options.push({ label: "Удалить папку", action: () => { } }, { label: "Создать файл...", action: () => { props.fsContext.addFile(props.file.id); } }, { label: "Создать папку...", action: () => { props.fsContext.addFolder(props.file.id); } });
                break;
            }
            default: break;
        }
        contextMenu.open(e, options);
    };
    const onBlur = () => {
        if (tempName.value.length > 0) {
            props.fsContext.finishCreation(props.index, tempName.value);
        }
        else {
            props.fsContext.discardCreation(props.index);
        }
    };
    const onChange = (e) => {
        tempName.set(e.target.value);
    };
    const onKeyUp = (e) => {
        switch (e.code) {
            case 'Enter':
            case 'NumpadEnter': {
                if (tempName.value.length > 0) {
                    props.fsContext.finishCreation(props.index, tempName.value);
                }
                else {
                    props.fsContext.discardCreation(props.index);
                }
                break;
            }
            case 'Escape': {
                props.fsContext.discardCreation(props.index);
                break;
            }
            default: break;
        }
    };
    if (props.file.name == null) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "explorer-item", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "icon" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", autoFocus: true, onBlur: onBlur, onChange: onChange, onKeyUp: onKeyUp })] }));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "explorer-item", onContextMenu: onContextMenu, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "icon" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "name", children: props.file.name })] }));
}


/***/ }),

/***/ "./src/components/Panel/Panel.styles.scss":
/*!************************************************!*\
  !*** ./src/components/Panel/Panel.styles.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Panel/Panel.tsx":
/*!****************************************!*\
  !*** ./src/components/Panel/Panel.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Panel: () => (/* binding */ Panel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Panel_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.styles.scss */ "./src/components/Panel/Panel.styles.scss");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components */ "./src/components/index.ts");



function Panel(props) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "panel", style: { width: props.width + 'px' }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Explorer, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tasks" })] }));
}


/***/ }),

/***/ "./src/components/ResizeBorder/ResizeBorder.styles.scss":
/*!**************************************************************!*\
  !*** ./src/components/ResizeBorder/ResizeBorder.styles.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ResizeBorder/ResizeBorder.tsx":
/*!******************************************************!*\
  !*** ./src/components/ResizeBorder/ResizeBorder.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResizeBorder: () => (/* binding */ ResizeBorder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/hooks */ "./src/utils/hooks/index.ts");
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/components */ "./src/utils/components/index.ts");
/* harmony import */ var _ResizeBorder_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResizeBorder.styles.scss */ "./src/components/ResizeBorder/ResizeBorder.styles.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ "./src/utils/index.ts");





var ResizeBorder;
(function (ResizeBorder) {
    function Vertical(props) { return component("vertical", props.storage, props.maxValue); }
    ResizeBorder.Vertical = Vertical;
    function Horizontal(props) { return component("horizontal", props.storage, props.maxValue); }
    ResizeBorder.Horizontal = Horizontal;
    function component(anchor, storage, maxValue) {
        const hovered = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_1__.useStorage)(false);
        const pressed = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_1__.useStorage)(false);
        (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_1__.useDocumentEvent)('mousemove', (e) => {
            if (!pressed.value)
                return;
            const value = anchor == "vertical"
                ? e.pageX
                : e.pageY;
            storage.set((0,_utils__WEBPACK_IMPORTED_MODULE_4__.clamp)(value, 0, maxValue));
        });
        (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_1__.useDocumentEvent)('mouseup', (e) => {
            if (!pressed.value)
                return;
            pressed.set(false);
        });
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_components__WEBPACK_IMPORTED_MODULE_2__.ClassName, { "resize-border__hovered": hovered.value || pressed.value, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `resize-border noselect resize-border__${anchor}`, style: { left: (storage.value - 3) + 'px' }, onMouseDown: () => pressed.set(true), onMouseEnter: () => hovered.set(true), onMouseLeave: () => hovered.set(false) }) }));
    }
})(ResizeBorder || (ResizeBorder = {}));


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenu: () => (/* reexport safe */ _ContextMenu_ContextMenu__WEBPACK_IMPORTED_MODULE_3__.ContextMenu),
/* harmony export */   Explorer: () => (/* reexport safe */ _Explorer_Explorer__WEBPACK_IMPORTED_MODULE_0__.Explorer),
/* harmony export */   ExplorerItem: () => (/* reexport safe */ _Explorer_Explorer__WEBPACK_IMPORTED_MODULE_0__.ExplorerItem),
/* harmony export */   Panel: () => (/* reexport safe */ _Panel_Panel__WEBPACK_IMPORTED_MODULE_1__.Panel),
/* harmony export */   ResizeBorder: () => (/* reexport safe */ _ResizeBorder_ResizeBorder__WEBPACK_IMPORTED_MODULE_2__.ResizeBorder)
/* harmony export */ });
/* harmony import */ var _Explorer_Explorer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Explorer/Explorer */ "./src/components/Explorer/Explorer.tsx");
/* harmony import */ var _Panel_Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel/Panel */ "./src/components/Panel/Panel.tsx");
/* harmony import */ var _ResizeBorder_ResizeBorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResizeBorder/ResizeBorder */ "./src/components/ResizeBorder/ResizeBorder.tsx");
/* harmony import */ var _ContextMenu_ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu/ContextMenu */ "./src/components/ContextMenu/ContextMenu.tsx");






/***/ }),

/***/ "./src/contexts/ContextMenuContext.tsx":
/*!*********************************************!*\
  !*** ./src/contexts/ContextMenuContext.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenuProvider: () => (/* binding */ ContextMenuProvider),
/* harmony export */   useContextMenuContext: () => (/* binding */ useContextMenuContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/hooks */ "./src/utils/hooks/index.ts");




class ContextMenuHandler {
    constructor(storage) {
        this.storage = storage;
    }
    open(event, options) {
        event.preventDefault();
        event.stopPropagation();
        this.storage.set((v) => {
            v.x = event.pageX;
            v.y = event.pageY;
            v.options = options;
            return Object.assign({}, v);
        });
    }
}
const ContextMenuContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
function useContextMenuContext() { return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ContextMenuContext); }
function ContextMenuProvider(props) {
    const storage = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_3__.useStorage)({ options: [] });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContextMenuContext.Provider, { value: new ContextMenuHandler(storage), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.ContextMenu, { x: storage.value.x, y: storage.value.y, options: storage.value.options, onClose: () => storage.set({ options: [] }) }), props.children] }));
}


/***/ }),

/***/ "./src/contexts/FileSystemContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/FileSystemContext.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSystemContextHandler: () => (/* binding */ FileSystemContextHandler),
/* harmony export */   FileSystemProvider: () => (/* binding */ FileSystemProvider),
/* harmony export */   useFileSystemContext: () => (/* binding */ useFileSystemContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/hooks */ "./src/utils/hooks/index.ts");



class FileSystemContextHandler {
    constructor(fs, fsSetter, currentItemIndex, currentItemIndexSet) {
        this.fs = fs;
        this.fsSetter = fsSetter;
        this.currentItemIndex = currentItemIndex;
        this.currentItemIndexSet = currentItemIndexSet;
    }
    genID() {
        return Math.max(...this.fs.map((v) => v.id), 0) + 1;
    }
    addFile(parentID) {
        this.fsSetter((items) => {
            return [
                ...items,
                { id: this.genID(), parentID, type: 'file', name: null, content: null }
            ];
        });
    }
    addFolder(parentID) {
        this.fsSetter((items) => {
            return [
                ...items,
                { id: this.genID(), parentID, type: 'folder', name: null, content: null }
            ];
        });
    }
    discardCreation(index) {
        this.fsSetter((items) => {
            items.splice(index, 1);
            return [...items];
        });
    }
    finishCreation(index, name) {
        this.fsSetter((items) => {
            items[index].name = name;
            return [...items];
        });
    }
    inputCurrent(value) {
        this.fsSetter((items) => {
            items[this.currentItemIndex].content = value;
            return [...items];
        });
    }
    contentCurrent() {
        return this.fs[this.currentItemIndex].content;
    }
}
const FileSystemContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function useFileSystemContext() { return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FileSystemContext); }
function FileSystemProvider(props) {
    const current = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_2__.useStorage)(0);
    const files = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_2__.useStorage)([
        { id: 0, parentID: null, type: 'file', name: 'file.txt', content: null }
    ]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FileSystemContext.Provider, { value: new FileSystemContextHandler(files.value, files.set, current.value, current.set), children: props.children }));
}


/***/ }),

/***/ "./src/contexts/index.ts":
/*!*******************************!*\
  !*** ./src/contexts/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenuProvider: () => (/* reexport safe */ _ContextMenuContext__WEBPACK_IMPORTED_MODULE_0__.ContextMenuProvider),
/* harmony export */   FileSystemContextHandler: () => (/* reexport safe */ _FileSystemContext__WEBPACK_IMPORTED_MODULE_1__.FileSystemContextHandler),
/* harmony export */   FileSystemProvider: () => (/* reexport safe */ _FileSystemContext__WEBPACK_IMPORTED_MODULE_1__.FileSystemProvider),
/* harmony export */   useContextMenuContext: () => (/* reexport safe */ _ContextMenuContext__WEBPACK_IMPORTED_MODULE_0__.useContextMenuContext),
/* harmony export */   useFileSystemContext: () => (/* reexport safe */ _FileSystemContext__WEBPACK_IMPORTED_MODULE_1__.useFileSystemContext)
/* harmony export */ });
/* harmony import */ var _ContextMenuContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextMenuContext */ "./src/contexts/ContextMenuContext.tsx");
/* harmony import */ var _FileSystemContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSystemContext */ "./src/contexts/FileSystemContext.tsx");




/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var src_contexts_FileSystemContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/contexts/FileSystemContext */ "./src/contexts/FileSystemContext.tsx");
/* harmony import */ var src_contexts_ContextMenuContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/contexts/ContextMenuContext */ "./src/contexts/ContextMenuContext.tsx");





const container = document.getElementById('root');
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_contexts_ContextMenuContext__WEBPACK_IMPORTED_MODULE_4__.ContextMenuProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_contexts_FileSystemContext__WEBPACK_IMPORTED_MODULE_3__.FileSystemProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__.App, {}) }) }));


/***/ }),

/***/ "./src/monaco.ts":
/*!***********************!*\
  !*** ./src/monaco.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   languageName: () => (/* binding */ languageName),
/* harmony export */   themeName: () => (/* binding */ themeName)
/* harmony export */ });
/* harmony import */ var _assets_theme_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/theme.json */ "./src/assets/theme.json");
/* harmony import */ var _assets_language_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/language.json */ "./src/assets/language.json");


const themeName = 'custom-language';
const languageName = 'custom-language';
function edit(monaco) {
    monaco.editor.defineTheme(themeName, {
        base: 'vs-dark',
        inherit: false,
        colors: _assets_theme_json__WEBPACK_IMPORTED_MODULE_0__,
        rules: _assets_language_json__WEBPACK_IMPORTED_MODULE_1__
    });
    registerLanguage(monaco);
}
function registerLanguage(monaco) {
    monaco.languages.register({ id: languageName });
    monaco.languages.setMonarchTokensProvider(languageName, {
        tokenizer: {
            root: [
                // [/\b(?:var|let|const|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|import|export|class|extends|super|new|this|instanceof|typeof|void|debugger|await|async|yield)\b/, 'keyword'],
                // [/[a-zA-Z_$][\w$]*/, 'identifier'],
                // [/\b\d+(\.\d+)?([eE][+-]?\d+)?\b/, 'number'],
                [/(["'`])(?:\\.|[^\x01])*?\1/, 'string'],
                // [/[+\-*/%&|^!<>?~:]=?/, 'operator'],
                // [/[{}()\[\]]/, '@brackets'],
                // [/(\/\/.*$)/, 'comment'],
                // [/\/\*[\s\S]*?\*\//, 'comment'],
                // [/[.,;@]/, 'punctuation'],
            ]
        }
    });
    monaco.languages.setLanguageConfiguration(languageName, {
        wordPattern: /\w+/,
        comments: {
            lineComment: '//',
            blockComment: ['/*', '*/']
        },
        brackets: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')']
        ],
        autoClosingPairs: [
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '"', close: '"' },
            { open: "'", close: "'" },
            { open: '`', close: '`' }
        ],
        surroundingPairs: [
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '"', close: '"' },
            { open: "'", close: "'" },
            { open: '`', close: '`' }
        ],
        indentationRules: {
            increaseIndentPattern: /^(.*\{[^}"\r\n]*|\b(?:if|else|for|while|switch|case|try|catch|finally)\b.*)$/m,
            decreaseIndentPattern: /^\s*(\}|\/\/.*|\*\/)/,
        }
    });
}


/***/ }),

/***/ "./src/utils/components/ClassName.tsx":
/*!********************************************!*\
  !*** ./src/utils/components/ClassName.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassName: () => (/* binding */ ClassName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ClassName(props) {
    var _a;
    const classes = Object.entries(props)
        .filter(([key, value]) => key != 'children' && value)
        .map(([key, _]) => key)
        .join(' ');
    if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(props.children)) {
        const currentClasses = (_a = props.children.props.className) !== null && _a !== void 0 ? _a : '';
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(props.children, {
            //@ts-ignore
            className: [currentClasses, classes].join(' ')
        });
    }
    return props.children;
}


/***/ }),

/***/ "./src/utils/components/index.ts":
/*!***************************************!*\
  !*** ./src/utils/components/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassName: () => (/* reexport safe */ _ClassName__WEBPACK_IMPORTED_MODULE_0__.ClassName)
/* harmony export */ });
/* harmony import */ var _ClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassName */ "./src/utils/components/ClassName.tsx");



/***/ }),

/***/ "./src/utils/hooks/index.ts":
/*!**********************************!*\
  !*** ./src/utils/hooks/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDocumentEvent: () => (/* reexport safe */ _useDocumentEvent__WEBPACK_IMPORTED_MODULE_0__.useDocumentEvent),
/* harmony export */   useStorage: () => (/* reexport safe */ _useStorage__WEBPACK_IMPORTED_MODULE_1__.useStorage),
/* harmony export */   useWindowEvent: () => (/* reexport safe */ _useWindowEvent__WEBPACK_IMPORTED_MODULE_2__.useWindowEvent)
/* harmony export */ });
/* harmony import */ var _useDocumentEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDocumentEvent */ "./src/utils/hooks/useDocumentEvent.ts");
/* harmony import */ var _useStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStorage */ "./src/utils/hooks/useStorage.ts");
/* harmony import */ var _useWindowEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWindowEvent */ "./src/utils/hooks/useWindowEvent.ts");





/***/ }),

/***/ "./src/utils/hooks/useDocumentEvent.ts":
/*!*********************************************!*\
  !*** ./src/utils/hooks/useDocumentEvent.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDocumentEvent: () => (/* binding */ useDocumentEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDocumentEvent(event, callback) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        document.addEventListener(event, callback);
        return () => document.removeEventListener(event, callback);
    }, [callback]);
}


/***/ }),

/***/ "./src/utils/hooks/useStorage.ts":
/*!***************************************!*\
  !*** ./src/utils/hooks/useStorage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStorage: () => (/* binding */ useStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useStorage(value) {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
    return {
        value: state,
        set: setState,
        invert: () => setState((v) => !v)
    };
}


/***/ }),

/***/ "./src/utils/hooks/useWindowEvent.ts":
/*!*******************************************!*\
  !*** ./src/utils/hooks/useWindowEvent.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWindowEvent: () => (/* binding */ useWindowEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowEvent(event, callback) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        window.addEventListener(event, callback);
        return () => window.removeEventListener(event, callback);
    }, [callback]);
}


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.clamp),
/* harmony export */   toArrayIfNot: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.toArrayIfNot)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/utils/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.ts");




/***/ }),

/***/ "./src/utils/types.ts":
/*!****************************!*\
  !*** ./src/utils/types.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   toArrayIfNot: () => (/* binding */ toArrayIfNot)
/* harmony export */ });

function clamp(value, min, max) {
    if (min != null && value < min)
        return min;
    else if (max != null && value > max)
        return max;
    return value;
}
function toArrayIfNot(value) {
    return (Array.isArray(value) ? value : [value]);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.c9d812a1.js.map
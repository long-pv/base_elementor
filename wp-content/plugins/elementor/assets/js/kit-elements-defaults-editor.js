/*! elementor - v3.30.0 - 30-07-2025 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../modules/kit-elements-defaults/assets/js/editor/api.js":
/*!****************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/api.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.deleteElementDefaults = deleteElementDefaults;
exports.getElementDefaults = getElementDefaults;
exports.loadElementsDefaults = loadElementsDefaults;
exports.updateElementDefaults = updateElementDefaults;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var NAMESPACE = 'kit-elements-defaults';
function loadElementsDefaults() {
  return _loadElementsDefaults.apply(this, arguments);
}
function _loadElementsDefaults() {
  _loadElementsDefaults = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          $e.data.cache.storage.removeItem(NAMESPACE);
          return _context.abrupt("return", $e.data.get("".concat(NAMESPACE, "/index")));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _loadElementsDefaults.apply(this, arguments);
}
function getElementDefaults(type) {
  var defaults = $e.data.cache.storage.getItem(NAMESPACE) || {};
  return defaults[type] || {};
}
function updateElementDefaults(_x, _x2) {
  return _updateElementDefaults.apply(this, arguments);
}
function _updateElementDefaults() {
  _updateElementDefaults = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee2(type, settings) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return $e.data.update("".concat(NAMESPACE, "/index"), {
            settings: settings
          }, {
            type: type
          });
        case 2:
          _context2.next = 4;
          return loadElementsDefaults();
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _updateElementDefaults.apply(this, arguments);
}
function deleteElementDefaults(_x3) {
  return _deleteElementDefaults.apply(this, arguments);
}
function _deleteElementDefaults() {
  _deleteElementDefaults = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee3(type) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return $e.data.delete("".concat(NAMESPACE, "/index"), {
            type: type
          });
        case 2:
          _context3.next = 4;
          return loadElementsDefaults();
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _deleteElementDefaults.apply(this, arguments);
}

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/commands/confirm-creation.js":
/*!**************************************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/commands/confirm-creation.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _confirmCreationDialog = __webpack_require__(/*! ../confirm-creation-dialog */ "../modules/kit-elements-defaults/assets/js/editor/confirm-creation-dialog.js");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ConfirmCreation = exports["default"] = /*#__PURE__*/function (_$e$modules$editor$Co) {
  function ConfirmCreation() {
    (0, _classCallCheck2.default)(this, ConfirmCreation);
    return _callSuper(this, ConfirmCreation, arguments);
  }
  (0, _inherits2.default)(ConfirmCreation, _$e$modules$editor$Co);
  return (0, _createClass2.default)(ConfirmCreation, [{
    key: "validateArgs",
    value: function validateArgs() {
      this.requireContainer();
    }
  }, {
    key: "apply",
    value: function () {
      var _apply = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
        var container, confirmCreationDialog;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              container = _ref.container;
              confirmCreationDialog = (0, _confirmCreationDialog.getConfirmCreationDialog)({
                onConfirm: function onConfirm() {
                  return $e.run('kit-elements-defaults/create', {
                    container: container
                  });
                }
              });
              if (!confirmCreationDialog.doNotShowAgain) {
                _context.next = 5;
                break;
              }
              $e.run('kit-elements-defaults/create', {
                container: container
              });
              return _context.abrupt("return");
            case 5:
              confirmCreationDialog.show();
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function apply(_x) {
        return _apply.apply(this, arguments);
      }
      return apply;
    }()
  }]);
}($e.modules.editor.CommandContainerBase);

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/commands/create.js":
/*!****************************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/commands/create.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _api = __webpack_require__(/*! ../api */ "../modules/kit-elements-defaults/assets/js/editor/api.js");
var _extractContainerSettings = _interopRequireDefault(__webpack_require__(/*! ../extract-container-settings */ "../modules/kit-elements-defaults/assets/js/editor/extract-container-settings.js"));
var _utils = __webpack_require__(/*! ../utils */ "../modules/kit-elements-defaults/assets/js/editor/utils.js");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Create = exports["default"] = /*#__PURE__*/function (_$e$modules$editor$Co) {
  function Create() {
    (0, _classCallCheck2.default)(this, Create);
    return _callSuper(this, Create, arguments);
  }
  (0, _inherits2.default)(Create, _$e$modules$editor$Co);
  return (0, _createClass2.default)(Create, [{
    key: "validateArgs",
    value: function validateArgs() {
      this.requireContainer();
    }
  }, {
    key: "apply",
    value: function () {
      var _apply = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
        var container, type, previousDefaults, newDefaults;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              container = _ref.container;
              $e.internal('panel/state-loading');
              type = (0, _utils.extractElementType)(container.model), previousDefaults = (0, _api.getElementDefaults)(type), newDefaults = (0, _extractContainerSettings.default)(container);
              _context.prev = 3;
              _context.next = 6;
              return (0, _api.updateElementDefaults)(type, newDefaults);
            case 6:
              elementor.notifications.showToast({
                message: __('Default settings changed.', 'elementor'),
                buttons: [{
                  name: 'undo',
                  text: __('Undo', 'elementor'),
                  callback: function callback() {
                    $e.run('kit-elements-defaults/restore', {
                      type: type,
                      settings: previousDefaults
                    });
                  }
                }]
              });
              _context.next = 13;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](3);
              elementor.notifications.showToast({
                message: __('An error occurred.', 'elementor')
              });
              throw _context.t0;
            case 13:
              _context.prev = 13;
              $e.internal('panel/state-ready');
              return _context.finish(13);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 9, 13, 16]]);
      }));
      function apply(_x) {
        return _apply.apply(this, arguments);
      }
      return apply;
    }()
  }]);
}($e.modules.editor.CommandContainerBase);

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/commands/delete.js":
/*!****************************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/commands/delete.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _api = __webpack_require__(/*! ../api */ "../modules/kit-elements-defaults/assets/js/editor/api.js");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Delete = exports["default"] = /*#__PURE__*/function (_$e$modules$CommandBa) {
  function Delete() {
    (0, _classCallCheck2.default)(this, Delete);
    return _callSuper(this, Delete, arguments);
  }
  (0, _inherits2.default)(Delete, _$e$modules$CommandBa);
  return (0, _createClass2.default)(Delete, [{
    key: "apply",
    value: function () {
      var _apply = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
        var type;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              type = _ref.type;
              $e.internal('panel/state-loading');
              _context.prev = 2;
              _context.next = 5;
              return (0, _api.deleteElementDefaults)(type);
            case 5:
              elementor.notifications.showToast({
                message: __('Default settings has been reset.', 'elementor')
              });
              _context.next = 12;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              elementor.notifications.showToast({
                message: __('An error occurred.', 'elementor')
              });
              throw _context.t0;
            case 12:
              _context.prev = 12;
              $e.internal('panel/state-ready');
              return _context.finish(12);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 8, 12, 15]]);
      }));
      function apply(_x) {
        return _apply.apply(this, arguments);
      }
      return apply;
    }()
  }]);
}($e.modules.CommandBase);

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/commands/index.js":
/*!***************************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/commands/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ConfirmCreation", ({
  enumerable: true,
  get: function get() {
    return _confirmCreation.default;
  }
}));
Object.defineProperty(exports, "Create", ({
  enumerable: true,
  get: function get() {
    return _create.default;
  }
}));
Object.defineProperty(exports, "Delete", ({
  enumerable: true,
  get: function get() {
    return _delete.default;
  }
}));
Object.defineProperty(exports, "Restore", ({
  enumerable: true,
  get: function get() {
    return _restore.default;
  }
}));
var _confirmCreation = _interopRequireDefault(__webpack_require__(/*! ./confirm-creation */ "../modules/kit-elements-defaults/assets/js/editor/commands/confirm-creation.js"));
var _create = _interopRequireDefault(__webpack_require__(/*! ./create */ "../modules/kit-elements-defaults/assets/js/editor/commands/create.js"));
var _delete = _interopRequireDefault(__webpack_require__(/*! ./delete */ "../modules/kit-elements-defaults/assets/js/editor/commands/delete.js"));
var _restore = _interopRequireDefault(__webpack_require__(/*! ./restore */ "../modules/kit-elements-defaults/assets/js/editor/commands/restore.js"));

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/commands/restore.js":
/*!*****************************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/commands/restore.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _api = __webpack_require__(/*! ../api */ "../modules/kit-elements-defaults/assets/js/editor/api.js");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Restore = exports["default"] = /*#__PURE__*/function (_$e$modules$CommandBa) {
  function Restore() {
    (0, _classCallCheck2.default)(this, Restore);
    return _callSuper(this, Restore, arguments);
  }
  (0, _inherits2.default)(Restore, _$e$modules$CommandBa);
  return (0, _createClass2.default)(Restore, [{
    key: "apply",
    value: function () {
      var _apply = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
        var type, settings;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              type = _ref.type, settings = _ref.settings;
              $e.internal('panel/state-loading');
              _context.prev = 2;
              _context.next = 5;
              return (0, _api.updateElementDefaults)(type, settings);
            case 5:
              elementor.notifications.showToast({
                message: __('Previous settings restored.', 'elementor')
              });
              _context.next = 12;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              elementor.notifications.showToast({
                message: __('An error occurred.', 'elementor')
              });
              throw _context.t0;
            case 12:
              _context.prev = 12;
              $e.internal('panel/state-ready');
              return _context.finish(12);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 8, 12, 15]]);
      }));
      function apply(_x) {
        return _apply.apply(this, arguments);
      }
      return apply;
    }()
  }]);
}($e.modules.CommandBase);

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/component.js":
/*!**********************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/component.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var hooks = _interopRequireWildcard(__webpack_require__(/*! ./hooks */ "../modules/kit-elements-defaults/assets/js/editor/hooks/index.js"));
var dataCommands = _interopRequireWildcard(__webpack_require__(/*! ./data-commands/ */ "../modules/kit-elements-defaults/assets/js/editor/data-commands/index.js"));
var commands = _interopRequireWildcard(__webpack_require__(/*! ./commands/ */ "../modules/kit-elements-defaults/assets/js/editor/commands/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Component = exports["default"] = /*#__PURE__*/function (_$e$modules$Component) {
  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return _callSuper(this, Component, arguments);
  }
  (0, _inherits2.default)(Component, _$e$modules$Component);
  return (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'kit-elements-defaults';
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(hooks);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return this.importCommands(dataCommands);
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }]);
}($e.modules.ComponentBase);

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/confirm-creation-dialog.js":
/*!************************************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/confirm-creation-dialog.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getConfirmCreationDialog = getConfirmCreationDialog;
exports.introductionManager = exports.introductionKey = void 0;
exports.removeConfirmCreationDialog = removeConfirmCreationDialog;
var introductionKey = exports.introductionKey = 'kit_elements_defaults_create_dialog';
var introductionManager = exports.introductionManager = null;

/**
 * A wrapper around Introduction class that allows to create a dialog only once,
 * + has specific logic for the "Do not show this message again" checkbox,
 * + the content for "save as default" feature.
 *
 * @param {Object}   config
 * @param {Function} config.onConfirm
 * @return {{show: (function(): *), doNotShowAgain: (boolean)}}
 */
function getConfirmCreationDialog(_ref) {
  var onConfirm = _ref.onConfirm;
  if (!introductionManager) {
    var _elementor$config$use;
    exports.introductionManager = introductionManager = createIntroductionManager();
    introductionManager.introductionViewed = !!((_elementor$config$use = elementor.config.user.introduction) !== null && _elementor$config$use !== void 0 && _elementor$config$use[introductionKey]);
  }
  var dialog = introductionManager.getDialog();
  dialog.onConfirm = function () {
    // `getElements` return JQuery object.
    if (dialog.getElements('checkbox-dont-show-again').prop('checked')) {
      introductionManager.setViewed();
    }
    onConfirm();
  };
  return {
    doNotShowAgain: !!introductionManager.introductionViewed,
    show: function show() {
      return introductionManager.show();
    }
  };
}
function removeConfirmCreationDialog() {
  exports.introductionManager = introductionManager = null;
}
function createIntroductionManager() {
  var _introduction$getDial, _introduction$getDial2;
  var dialogId = 'e-kit-elements-defaults-create-dialog';
  var introduction = new elementorModules.editor.utils.Introduction({
    introductionKey: introductionKey,
    dialogType: 'confirm',
    dialogOptions: {
      id: dialogId,
      headerMessage: __('Sure you want to change default settings?', 'elementor'),
      // Translators: %1$s: Opening strong tag, %2$s: Closing strong tag.
      message: __('Your changes will automatically be saved for future uses of this element. %1$sNote:%2$s This includes sensitive information like emails, API keys, etc.', 'elementor').replace('%1$s', '<strong>').replace('%2$s', '</strong>'),
      effects: {
        show: 'fadeIn',
        hide: 'fadeOut'
      },
      hide: {
        onBackgroundClick: true
      },
      strings: {
        confirm: __('Save', 'elementor'),
        cancel: __('Cancel', 'elementor')
      },
      onShow: function onShow() {
        var _this$getElements;
        (_this$getElements = this.getElements('checkbox-dont-show-again')) === null || _this$getElements === void 0 || _this$getElements.prop('checked', true);
      }
    }
  });
  var _createCheckboxAndLab = createCheckboxAndLabel(dialogId),
    checkbox = _createCheckboxAndLab.checkbox,
    label = _createCheckboxAndLab.label;
  introduction.getDialog().addElement('checkbox-dont-show-again', checkbox);
  (_introduction$getDial = introduction.getDialog().getElements('message')) === null || _introduction$getDial === void 0 || (_introduction$getDial2 = _introduction$getDial.append) === null || _introduction$getDial2 === void 0 || _introduction$getDial2.call(_introduction$getDial, label); // `getElements` return JQuery object.

  return introduction;
}
function createCheckboxAndLabel(dialogId) {
  var checkboxId = "".concat(dialogId, "-dont-show-again");
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = checkboxId;
  checkbox.id = checkboxId;
  checkbox.checked = true;
  var label = document.createElement('label');
  label.htmlFor = checkboxId;
  label.textContent = __('Do not show this message again', 'elementor');
  label.prepend(checkbox);
  return {
    checkbox: checkbox,
    label: label
  };
}

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/data-commands/index.js":
/*!********************************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/data-commands/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Index = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Index = exports.Index = /*#__PURE__*/function (_$e$modules$CommandDa) {
  function Index() {
    (0, _classCallCheck2.default)(this, Index);
    return _callSuper(this, Index, arguments);
  }
  (0, _inherits2.default)(Index, _$e$modules$CommandDa);
  return (0, _createClass2.default)(Index, null, [{
    key: "getEndpointFormat",
    value: function getEndpointFormat() {
      return 'kit-elements-defaults/{type}';
    }
  }]);
}($e.modules.CommandData);

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/extract-container-settings.js":
/*!***************************************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/extract-container-settings.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = extractContainerSettings;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
var _utils = __webpack_require__(/*! ./utils */ "../modules/kit-elements-defaults/assets/js/editor/utils.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SPECIAL_SETTINGS = ['__dynamic__', '__globals__'];
function extractContainerSettings(container) {
  var settingsModel = container.settings,
    controls = settingsModel.controls,
    settings = settingsModel.toJSON({
      remove: ['default']
    });
  var localSettings = extractSettings(settings, controls);
  return _objectSpread(_objectSpread({}, localSettings), extractSpecialSettings(settings, controls, localSettings));
}
function extractSettings(settings, controls) {
  var existingSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var entries = Object.entries(settings).filter(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
      settingName = _ref2[0];
    return !!controls[settingName] && !Object.prototype.hasOwnProperty.call(existingSettings, settingName);
  });
  return Object.fromEntries(entries);
}
function extractSpecialSettings(settings, controls, localSettings) {
  return SPECIAL_SETTINGS.reduce(function (acc, type) {
    var specialSettings = extractSettings((settings === null || settings === void 0 ? void 0 : settings[type]) || {}, controls, localSettings);
    if (!(0, _utils.isPopulatedObject)(specialSettings)) {
      return acc;
    }
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2.default)({}, type, specialSettings));
  }, {});
}

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/hooks/data/fill-defaults-on-drop.js":
/*!*********************************************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/hooks/data/fill-defaults-on-drop.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _api = __webpack_require__(/*! ../../api */ "../modules/kit-elements-defaults/assets/js/editor/api.js");
var _utils = __webpack_require__(/*! ../../utils */ "../modules/kit-elements-defaults/assets/js/editor/utils.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FillDefaultsOnDrop = exports["default"] = /*#__PURE__*/function (_$e$modules$hookData$) {
  function FillDefaultsOnDrop() {
    (0, _classCallCheck2.default)(this, FillDefaultsOnDrop);
    return _callSuper(this, FillDefaultsOnDrop, arguments);
  }
  (0, _inherits2.default)(FillDefaultsOnDrop, _$e$modules$hookData$);
  return (0, _createClass2.default)(FillDefaultsOnDrop, [{
    key: "getCommand",
    value: function getCommand() {
      return 'preview/drop';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'fill-defaults-on-drop';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$model, _args$model2;
      return ((_args$model = args.model) === null || _args$model === void 0 ? void 0 : _args$model.widgetType) || ((_args$model2 = args.model) === null || _args$model2 === void 0 ? void 0 : _args$model2.elType);
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var model = args.model;
      var elementDefaultSettings = (0, _api.getElementDefaults)((0, _utils.extractElementType)(model));
      if (!(0, _utils.isPopulatedObject)(elementDefaultSettings)) {
        return true;
      }
      var settings = _objectSpread(_objectSpread({}, elementDefaultSettings), args.model.settings || {});
      ['__dynamic__', '__globals__'].forEach(function (type) {
        var _args$model$settings;
        if (!(0, _utils.isPopulatedObject)(elementDefaultSettings[type])) {
          return;
        }
        settings[type] = _objectSpread(_objectSpread({}, elementDefaultSettings[type] || {}), ((_args$model$settings = args.model.settings) === null || _args$model$settings === void 0 ? void 0 : _args$model$settings[type]) || {});
      });
      args.model = _objectSpread(_objectSpread({}, args.model), {}, {
        settings: settings
      });
      return true;
    }
  }]);
}($e.modules.hookData.Dependency);

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/hooks/index.js":
/*!************************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/hooks/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "FillDefaultsOnDrop", ({
  enumerable: true,
  get: function get() {
    return _fillDefaultsOnDrop.default;
  }
}));
var _fillDefaultsOnDrop = _interopRequireDefault(__webpack_require__(/*! ./data/fill-defaults-on-drop */ "../modules/kit-elements-defaults/assets/js/editor/hooks/data/fill-defaults-on-drop.js"));

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/module.js":
/*!*******************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/module.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "../modules/kit-elements-defaults/assets/js/editor/component.js"));
var _api = __webpack_require__(/*! ./api */ "../modules/kit-elements-defaults/assets/js/editor/api.js");
var _utils = __webpack_require__(/*! ./utils */ "../modules/kit-elements-defaults/assets/js/editor/utils.js");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _Module_brand = /*#__PURE__*/new WeakSet();
var Module = exports["default"] = /*#__PURE__*/function (_elementorModules$edi) {
  function Module() {
    var _this;
    (0, _classCallCheck2.default)(this, Module);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Module, [].concat(args));
    _classPrivateMethodInitSpec(_this, _Module_brand);
    return _this;
  }
  (0, _inherits2.default)(Module, _elementorModules$edi);
  return (0, _createClass2.default)(Module, [{
    key: "onElementorInit",
    value: function onElementorInit() {
      (0, _api.loadElementsDefaults)();
      _assertClassBrand(_Module_brand, this, _addContextMenuItem).call(this);
    }
  }, {
    key: "onElementorInitComponents",
    value: function onElementorInitComponents() {
      window.$e.components.register(new _component.default());
    }
  }]);
}(elementorModules.editor.utils.Module);
function _addContextMenuItem() {
  var _elementor$config;
  if (!((_elementor$config = elementor.config) !== null && _elementor$config !== void 0 && (_elementor$config = _elementor$config.user) !== null && _elementor$config !== void 0 && _elementor$config.is_administrator)) {
    return;
  }
  ['widget', 'container', 'section'].forEach(function (elType) {
    elementor.hooks.addFilter("elements/".concat(elType, "/contextMenuGroups"), function (groups, view) {
      var _view$options;
      // Supporting only inner section and not sections,
      // extractElementType() will return 'inner-section' for inner sections instead of 'section'.
      if ('section' === (0, _utils.extractElementType)(((_view$options = view.options) === null || _view$options === void 0 ? void 0 : _view$options.model) || {})) {
        return groups;
      }
      return groups.map(function (group) {
        if (group.name !== 'save') {
          return group;
        }
        group.actions = [].concat((0, _toConsumableArray2.default)(group.actions), [{
          name: 'save-as-default',
          title: __('Save as default', 'elementor'),
          isEnabled: function isEnabled() {
            return !view.getContainer().isLocked();
          },
          callback: function callback() {
            $e.run('kit-elements-defaults/confirm-creation', {
              container: view.getContainer()
            });
          }
        }]);
        return group;
      });
    });
  });
}

/***/ }),

/***/ "../modules/kit-elements-defaults/assets/js/editor/utils.js":
/*!******************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/utils.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.extractElementType = extractElementType;
exports.isPopulatedObject = isPopulatedObject;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js"));
function isPopulatedObject(obj) {
  return obj && 'object' === (0, _typeof2.default)(obj) && !Array.isArray(obj) && Object.keys(obj).length > 0;
}
function extractElementType(model) {
  model = model.attributes || model;
  var elementType = model.widgetType || model.elType;
  if ('section' === elementType && model.isInner) {
    elementType = 'inner-section';
  }
  return elementType;
}

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = wp.i18n;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/***/ ((module) => {

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \******************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/***/ ((module) => {

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "../node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "../node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \****************************************************************/
/***/ ((module) => {

function _getPrototypeOf(t) {
  return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/inherits.js":
/*!**********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inherits.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && setPrototypeOf(t, e);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \*******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return assertThisInitialized(t);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \****************************************************************/
/***/ ((module) => {

function _setPrototypeOf(t, e) {
  return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "../node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(r, e) {
  return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "../node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "../node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(r) {
  return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "../node_modules/@babel/runtime/helpers/toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "../node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************************************************!*\
  !*** ../modules/kit-elements-defaults/assets/js/editor/index.js ***!
  \******************************************************************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _module = _interopRequireDefault(__webpack_require__(/*! ./module.js */ "../modules/kit-elements-defaults/assets/js/editor/module.js"));
new _module.default();
})();

/******/ })()
;
//# sourceMappingURL=kit-elements-defaults-editor.js.map
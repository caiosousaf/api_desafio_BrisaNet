"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends6 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _schemaTyped = require("schema-typed");

var _FormContext = _interopRequireWildcard(require("./FormContext"));

var _FormControl = _interopRequireDefault(require("../FormControl"));

var _FormControlLabel = _interopRequireDefault(require("../FormControlLabel"));

var _FormErrorMessage = _interopRequireDefault(require("../FormErrorMessage"));

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

var _FormHelpText = _interopRequireDefault(require("../FormHelpText"));

var _useFormClassNames = require("./useFormClassNames");

var _useSchemaModel2 = _interopRequireDefault(require("./useSchemaModel"));

var Form = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$checkTrigger = props.checkTrigger,
      checkTrigger = _props$checkTrigger === void 0 ? 'change' : _props$checkTrigger,
      _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'form' : _props$classPrefix,
      _props$errorFromConte = props.errorFromContext,
      errorFromContext = _props$errorFromConte === void 0 ? true : _props$errorFromConte,
      _props$formDefaultVal = props.formDefaultValue,
      formDefaultValue = _props$formDefaultVal === void 0 ? {} : _props$formDefaultVal,
      formValue = props.formValue,
      formError = props.formError,
      fluid = props.fluid,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'vertical' : _props$layout,
      _props$model = props.model,
      formModel = _props$model === void 0 ? (0, _schemaTyped.SchemaModel)({}) : _props$model,
      readOnly = props.readOnly,
      plaintext = props.plaintext,
      className = props.className,
      children = props.children,
      disabled = props.disabled,
      onSubmit = props.onSubmit,
      onCheck = props.onCheck,
      onError = props.onError,
      onChange = props.onChange,
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["checkTrigger", "classPrefix", "errorFromContext", "formDefaultValue", "formValue", "formError", "fluid", "layout", "model", "readOnly", "plaintext", "className", "children", "disabled", "onSubmit", "onCheck", "onError", "onChange"]);

  var _useSchemaModel = (0, _useSchemaModel2.default)(formModel),
      getCombinedModel = _useSchemaModel.getCombinedModel,
      pushFieldRule = _useSchemaModel.pushFieldRule,
      removeFieldRule = _useSchemaModel.removeFieldRule;

  var classes = (0, _useFormClassNames.useFormClassNames)({
    classPrefix: classPrefix,
    className: className,
    fluid: fluid,
    layout: layout,
    readOnly: readOnly,
    plaintext: plaintext,
    disabled: disabled
  });

  var _useState = (0, _react.useState)(formDefaultValue),
      _formValue = _useState[0],
      setFormValue = _useState[1];

  var _useState2 = (0, _react.useState)(formError || {}),
      _formError = _useState2[0],
      setFormError = _useState2[1];

  var getFormValue = (0, _react.useCallback)(function () {
    return (0, _isUndefined.default)(formValue) ? _formValue : formValue;
  }, [_formValue, formValue]);
  var getFormError = (0, _react.useCallback)(function () {
    return (0, _isUndefined.default)(formError) ? _formError : formError;
  }, [formError, _formError]);
  /**
   * Validate the form data and return a boolean.
   * The error message after verification is returned in the callback.
   * @param callback
   */

  var check = (0, _react.useCallback)(function (callback) {
    var formValue = getFormValue() || {};
    var formError = {};
    var errorCount = 0;
    var model = getCombinedModel();
    Object.keys(model.spec).forEach(function (key) {
      var checkResult = model.checkForField(key, formValue);

      if (checkResult.hasError === true) {
        errorCount += 1;
        formError[key] = (checkResult === null || checkResult === void 0 ? void 0 : checkResult.errorMessage) || checkResult;
      }
    });
    setFormError(formError);
    onCheck === null || onCheck === void 0 ? void 0 : onCheck(formError);
    callback === null || callback === void 0 ? void 0 : callback(formError);

    if (errorCount > 0) {
      onError === null || onError === void 0 ? void 0 : onError(formError);
      return false;
    }

    return true;
  }, [getFormValue, getCombinedModel, onCheck, onError]);
  /**
   * Check the data field
   * @param fieldName
   * @param callback
   */

  var checkForField = (0, _react.useCallback)(function (fieldName, callback) {
    var _extends2;

    var formValue = getFormValue() || {};
    var model = getCombinedModel();
    var checkResult = model.checkForField(fieldName, formValue);
    var formError = (0, _extends6.default)({}, getFormError(), (_extends2 = {}, _extends2[fieldName] = (checkResult === null || checkResult === void 0 ? void 0 : checkResult.errorMessage) || checkResult, _extends2));
    setFormError(formError);
    onCheck === null || onCheck === void 0 ? void 0 : onCheck(formError);
    callback === null || callback === void 0 ? void 0 : callback(checkResult);

    if (checkResult.hasError) {
      onError === null || onError === void 0 ? void 0 : onError(formError);
    }

    return !checkResult.hasError;
  }, [getFormValue, getCombinedModel, getFormError, onCheck, onError]);
  /**
   * Check form data asynchronously and return a Promise
   */

  var checkAsync = (0, _react.useCallback)(function () {
    var formValue = getFormValue() || {};
    var promises = [];
    var keys = [];
    var model = getCombinedModel();
    Object.keys(model.spec).forEach(function (key) {
      keys.push(key);
      promises.push(model.checkForFieldAsync(key, formValue));
    });
    return Promise.all(promises).then(function (values) {
      var formError = {};
      var errorCount = 0;

      for (var i = 0; i < values.length; i++) {
        if (values[i].hasError) {
          errorCount += 1;
          formError[keys[i]] = values[i].errorMessage;
        }
      }

      onCheck === null || onCheck === void 0 ? void 0 : onCheck(formError);
      setFormError(formError);

      if (errorCount > 0) {
        onError === null || onError === void 0 ? void 0 : onError(formError);
      }

      return {
        hasError: errorCount > 0,
        formError: formError
      };
    });
  }, [getFormValue, getCombinedModel, onCheck, onError]);
  /**
   * Asynchronously check form fields and return Promise
   * @param fieldName
   */

  var checkForFieldAsync = (0, _react.useCallback)(function (fieldName) {
    var formValue = getFormValue() || {};
    var model = getCombinedModel();
    return model.checkForFieldAsync(fieldName, formValue).then(function (checkResult) {
      var _extends3;

      var formError = (0, _extends6.default)({}, getFormError(), (_extends3 = {}, _extends3[fieldName] = checkResult.errorMessage, _extends3));
      onCheck === null || onCheck === void 0 ? void 0 : onCheck(formError);
      setFormError(formError);

      if (checkResult.hasError) {
        onError === null || onError === void 0 ? void 0 : onError(formError);
      }

      return checkResult;
    });
  }, [getFormValue, getCombinedModel, getFormError, onCheck, onError]);
  var cleanErrors = (0, _react.useCallback)(function () {
    setFormError({});
  }, []);
  var cleanErrorForField = (0, _react.useCallback)(function (fieldName) {
    setFormError((0, _omit.default)(_formError, [fieldName]));
  }, [_formError]);
  var resetErrors = (0, _react.useCallback)(function (formError) {
    if (formError === void 0) {
      formError = {};
    }

    setFormError(formError);
  }, []);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      root: rootRef.current,
      check: check,
      checkForField: checkForField,
      checkAsync: checkAsync,
      checkForFieldAsync: checkForFieldAsync,
      cleanErrors: cleanErrors,
      cleanErrorForField: cleanErrorForField,
      resetErrors: resetErrors
    };
  });
  var removeFieldError = (0, _react.useCallback)(function (name) {
    var formError = (0, _omit.default)(getFormError(), [name]);
    setFormError(formError);
    onCheck === null || onCheck === void 0 ? void 0 : onCheck(formError);
  }, [getFormError, onCheck]);
  var removeFieldValue = (0, _react.useCallback)(function (name) {
    var formValue = (0, _omit.default)(getFormValue(), [name]);
    setFormValue(formValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(formValue);
  }, [getFormValue, onChange]);
  var handleSubmit = (0, _react.useCallback)(function (event) {
    if (disabled || readOnly || plaintext) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    var checkStatus = check();
    onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(checkStatus, event);
  }, [disabled, readOnly, plaintext, check, onSubmit]);
  var handleFieldError = (0, _react.useCallback)(function (name, errorMessage) {
    var _extends4;

    var formError = (0, _extends6.default)({}, getFormError(), (_extends4 = {}, _extends4[name] = errorMessage, _extends4));
    setFormError(formError);
    onError === null || onError === void 0 ? void 0 : onError(formError);
    onCheck === null || onCheck === void 0 ? void 0 : onCheck(formError);
  }, [onError, onCheck, getFormError]);
  var handleFieldSuccess = (0, _react.useCallback)(function (name) {
    removeFieldError(name);
  }, [removeFieldError]);
  var handleFieldChange = (0, _react.useCallback)(function (name, value, event) {
    var _extends5;

    var formValue = getFormValue();
    var nextFormValue = (0, _extends6.default)({}, formValue, (_extends5 = {}, _extends5[name] = value, _extends5));
    setFormValue(nextFormValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(nextFormValue, event);
  }, [onChange, getFormValue]);
  var rootRef = (0, _react.useRef)(null);
  var formContextValue = (0, _react.useMemo)(function () {
    return {
      getCombinedModel: getCombinedModel,
      checkTrigger: checkTrigger,
      formDefaultValue: formDefaultValue,
      errorFromContext: errorFromContext,
      readOnly: readOnly,
      plaintext: plaintext,
      disabled: disabled,
      formError: getFormError(),
      removeFieldValue: removeFieldValue,
      removeFieldError: removeFieldError,
      pushFieldRule: pushFieldRule,
      removeFieldRule: removeFieldRule,
      onFieldChange: handleFieldChange,
      onFieldError: handleFieldError,
      onFieldSuccess: handleFieldSuccess
    };
  }, [getCombinedModel, checkTrigger, formDefaultValue, errorFromContext, readOnly, plaintext, disabled, getFormError, removeFieldValue, removeFieldError, pushFieldRule, removeFieldRule, handleFieldChange, handleFieldError, handleFieldSuccess]);
  return /*#__PURE__*/_react.default.createElement("form", (0, _extends6.default)({}, rest, {
    ref: rootRef,
    onSubmit: handleSubmit,
    className: classes
  }), /*#__PURE__*/_react.default.createElement(_FormContext.default.Provider, {
    value: formContextValue
  }, /*#__PURE__*/_react.default.createElement(_FormContext.FormValueContext.Provider, {
    value: formValue
  }, children)));
});

Form.Control = _FormControl.default;
Form.ControlLabel = _FormControlLabel.default;
Form.ErrorMessage = _FormErrorMessage.default;
Form.Group = _FormGroup.default;
Form.HelpText = _FormHelpText.default;
Form.Control = _FormControl.default;
Form.displayName = 'Form';
Form.propTypes = {
  className: _propTypes.default.string,
  classPrefix: _propTypes.default.string,
  children: _propTypes.default.node,
  errorFromContext: _propTypes.default.bool,
  layout: _propTypes.default.oneOf(['horizontal', 'vertical', 'inline']),
  fluid: _propTypes.default.bool,
  formValue: _propTypes.default.object,
  formDefaultValue: _propTypes.default.object,
  formError: _propTypes.default.object,
  checkTrigger: _propTypes.default.oneOf(['change', 'blur', 'none']),
  onChange: _propTypes.default.func,
  onError: _propTypes.default.func,
  onCheck: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  model: _propTypes.default.any,
  readOnly: _propTypes.default.bool,
  plaintext: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
var _default = Form;
exports.default = _default;
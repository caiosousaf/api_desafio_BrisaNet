import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useMemo, useCallback, useState, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';
import omit from 'lodash/omit';
import { SchemaModel } from 'schema-typed';
import FormContext, { FormValueContext } from './FormContext';
import FormControl from '../FormControl';
import FormControlLabel from '../FormControlLabel';
import FormErrorMessage from '../FormErrorMessage';
import FormGroup from '../FormGroup';
import FormHelpText from '../FormHelpText';
import { useFormClassNames } from './useFormClassNames';
import useSchemaModel from './useSchemaModel';
var Form = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
      formModel = _props$model === void 0 ? SchemaModel({}) : _props$model,
      readOnly = props.readOnly,
      plaintext = props.plaintext,
      className = props.className,
      children = props.children,
      disabled = props.disabled,
      onSubmit = props.onSubmit,
      onCheck = props.onCheck,
      onError = props.onError,
      onChange = props.onChange,
      rest = _objectWithoutPropertiesLoose(props, ["checkTrigger", "classPrefix", "errorFromContext", "formDefaultValue", "formValue", "formError", "fluid", "layout", "model", "readOnly", "plaintext", "className", "children", "disabled", "onSubmit", "onCheck", "onError", "onChange"]);

  var _useSchemaModel = useSchemaModel(formModel),
      getCombinedModel = _useSchemaModel.getCombinedModel,
      pushFieldRule = _useSchemaModel.pushFieldRule,
      removeFieldRule = _useSchemaModel.removeFieldRule;

  var classes = useFormClassNames({
    classPrefix: classPrefix,
    className: className,
    fluid: fluid,
    layout: layout,
    readOnly: readOnly,
    plaintext: plaintext,
    disabled: disabled
  });

  var _useState = useState(formDefaultValue),
      _formValue = _useState[0],
      setFormValue = _useState[1];

  var _useState2 = useState(formError || {}),
      _formError = _useState2[0],
      setFormError = _useState2[1];

  var getFormValue = useCallback(function () {
    return isUndefined(formValue) ? _formValue : formValue;
  }, [_formValue, formValue]);
  var getFormError = useCallback(function () {
    return isUndefined(formError) ? _formError : formError;
  }, [formError, _formError]);
  /**
   * Validate the form data and return a boolean.
   * The error message after verification is returned in the callback.
   * @param callback
   */

  var check = useCallback(function (callback) {
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

  var checkForField = useCallback(function (fieldName, callback) {
    var _extends2;

    var formValue = getFormValue() || {};
    var model = getCombinedModel();
    var checkResult = model.checkForField(fieldName, formValue);

    var formError = _extends({}, getFormError(), (_extends2 = {}, _extends2[fieldName] = (checkResult === null || checkResult === void 0 ? void 0 : checkResult.errorMessage) || checkResult, _extends2));

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

  var checkAsync = useCallback(function () {
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

  var checkForFieldAsync = useCallback(function (fieldName) {
    var formValue = getFormValue() || {};
    var model = getCombinedModel();
    return model.checkForFieldAsync(fieldName, formValue).then(function (checkResult) {
      var _extends3;

      var formError = _extends({}, getFormError(), (_extends3 = {}, _extends3[fieldName] = checkResult.errorMessage, _extends3));

      onCheck === null || onCheck === void 0 ? void 0 : onCheck(formError);
      setFormError(formError);

      if (checkResult.hasError) {
        onError === null || onError === void 0 ? void 0 : onError(formError);
      }

      return checkResult;
    });
  }, [getFormValue, getCombinedModel, getFormError, onCheck, onError]);
  var cleanErrors = useCallback(function () {
    setFormError({});
  }, []);
  var cleanErrorForField = useCallback(function (fieldName) {
    setFormError(omit(_formError, [fieldName]));
  }, [_formError]);
  var resetErrors = useCallback(function (formError) {
    if (formError === void 0) {
      formError = {};
    }

    setFormError(formError);
  }, []);
  useImperativeHandle(ref, function () {
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
  var removeFieldError = useCallback(function (name) {
    var formError = omit(getFormError(), [name]);
    setFormError(formError);
    onCheck === null || onCheck === void 0 ? void 0 : onCheck(formError);
  }, [getFormError, onCheck]);
  var removeFieldValue = useCallback(function (name) {
    var formValue = omit(getFormValue(), [name]);
    setFormValue(formValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(formValue);
  }, [getFormValue, onChange]);
  var handleSubmit = useCallback(function (event) {
    if (disabled || readOnly || plaintext) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    var checkStatus = check();
    onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(checkStatus, event);
  }, [disabled, readOnly, plaintext, check, onSubmit]);
  var handleFieldError = useCallback(function (name, errorMessage) {
    var _extends4;

    var formError = _extends({}, getFormError(), (_extends4 = {}, _extends4[name] = errorMessage, _extends4));

    setFormError(formError);
    onError === null || onError === void 0 ? void 0 : onError(formError);
    onCheck === null || onCheck === void 0 ? void 0 : onCheck(formError);
  }, [onError, onCheck, getFormError]);
  var handleFieldSuccess = useCallback(function (name) {
    removeFieldError(name);
  }, [removeFieldError]);
  var handleFieldChange = useCallback(function (name, value, event) {
    var _extends5;

    var formValue = getFormValue();

    var nextFormValue = _extends({}, formValue, (_extends5 = {}, _extends5[name] = value, _extends5));

    setFormValue(nextFormValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(nextFormValue, event);
  }, [onChange, getFormValue]);
  var rootRef = useRef(null);
  var formContextValue = useMemo(function () {
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
  return /*#__PURE__*/React.createElement("form", _extends({}, rest, {
    ref: rootRef,
    onSubmit: handleSubmit,
    className: classes
  }), /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: formContextValue
  }, /*#__PURE__*/React.createElement(FormValueContext.Provider, {
    value: formValue
  }, children)));
});
Form.Control = FormControl;
Form.ControlLabel = FormControlLabel;
Form.ErrorMessage = FormErrorMessage;
Form.Group = FormGroup;
Form.HelpText = FormHelpText;
Form.Control = FormControl;
Form.displayName = 'Form';
Form.propTypes = {
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  children: PropTypes.node,
  errorFromContext: PropTypes.bool,
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
  fluid: PropTypes.bool,
  formValue: PropTypes.object,
  formDefaultValue: PropTypes.object,
  formError: PropTypes.object,
  checkTrigger: PropTypes.oneOf(['change', 'blur', 'none']),
  onChange: PropTypes.func,
  onError: PropTypes.func,
  onCheck: PropTypes.func,
  onSubmit: PropTypes.func,
  model: PropTypes.any,
  readOnly: PropTypes.bool,
  plaintext: PropTypes.bool,
  disabled: PropTypes.bool
};
export default Form;
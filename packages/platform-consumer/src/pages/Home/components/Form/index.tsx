import React, { useContext, useMemo, useState } from "react";
import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import { Form, FormButtonGroup, FormItem, Input, Select, Submit } from "@formily/antd";
import HomeContext from "../../context";
import { HOME_ACTION } from "../../reducer/action";
import { WidgetMap } from "@my-low-code/basic-components";

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    Select,
  },
});

export const FormComponent = () => {
  const { state, dispatch } = useContext(HomeContext);
  const { currentGallery } = state
  const form = useMemo(() => createForm({values:currentGallery?.formConfig}), [currentGallery?.id]);
  if(!currentGallery){
    return null
  }

  const handleSubmit = (formConfig: {
    [key: string]: any;
  }) => {
    dispatch({
      type: HOME_ACTION.UPDATE_GALLERY_FORM_ACTION,
      payload: {
        id: currentGallery.id,
        formConfig,
      }
    })
    dispatch({
      type: HOME_ACTION.SET_CURRENT_GALLERY_ACTION,
      payload: null
    })
  }

  const currentComponentConfig = WidgetMap[currentGallery.type]
  return (
    <Form form={form}>
      <SchemaField schema={currentComponentConfig.schema.formSchema} />
      <FormButtonGroup>
        <Submit onSubmit={handleSubmit} type="dashed">提交</Submit>
      </FormButtonGroup>
    </Form>
  );
};

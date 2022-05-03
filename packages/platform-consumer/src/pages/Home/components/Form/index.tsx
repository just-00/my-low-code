import React, { useMemo, useState } from "react";
import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import { Form, FormItem, Input, Select } from "@formily/antd";
import { Button, Space } from "antd";

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    Select,
  },
});

export const FormComponent =  () => {
  const current = {
    type: "object",
    properties: {
      aa: {
        type: "string",
        title: "AA",
        "x-decorator": "FormItem",
        enum: [
          {
            label: "111",
            value: "111",
          },
          { label: "222", value: "222" },
        ],
        "x-component": "Select",
        "x-component-props": {
          placeholder: "Select",
        },
      },
      bb: {
        type: "string",
        title: "BB",
        "x-decorator": "FormItem",
        "x-component": "Input",
      },
    },
  };
  const form = useMemo(() => createForm(), [current]);
  return (
    <Form form={form}>
      <SchemaField schema={current} />
    </Form>
  );
};

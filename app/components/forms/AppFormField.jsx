import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../AppTextInput";
import {useFormikContext} from "formik";
export default function AppFormField({name,...otherProps}) {
    const{handleChange,setFieldTouched,errors,touched}=useFormikContext();
    return (
       <>
            <AppTextInput       
              onBlur={()=>setFieldTouched(name)}
              onChangeText={handleChange(name)}
              {...otherProps}
            />
          <ErrorMessage error={errors[name]} visible={touched[name]} />
       </>
    )
}

const styles = StyleSheet.create({})

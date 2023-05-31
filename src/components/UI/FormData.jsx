import React from "react";
import { Input, TextArea } from './index';
import { useSelector } from "react-redux";

const FormData = ({infoData, createArticle, formSubmit}) => {

    const { title, description, body } = createArticle;
    const {isLoading} = useSelector(state => state.article)

  return (
    <div className="w-75 mx-auto">
      <form onSubmit={formSubmit}>
        <Input
          label={"Title"}
          valName={title}
          name="title"
          infoData={infoData}
        />
        <TextArea
          className="mt-2"
          label={"Description"}
          valName={description}
          name="description"
          infoData={infoData}
        />
        <TextArea
          label={"Body"}
          valName={body}
          name="body"
          height="300px"
          infoData={infoData}
        />
        <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default FormData;

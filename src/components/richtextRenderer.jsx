import React from "react";

import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Text = ({ data, config }) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,

      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,

      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="mt-8 mb-2">{children}</h3>
      ),

      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className={`${config && config.h4}`}>{children}</h4>
      ),

      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,

      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,

      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={`${config && config.p}`}>{children}</p>
      ),

      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="my-5 ml-6 flex flex-col">{children}</ul>
      ),

      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,

      [BLOCKS.LIST_ITEM]: (node, children) => {
        return (
          <li className="disc-bullet">
            <span className="flex-1">{children}</span>
          </li>
        );
      },

      [BLOCKS.HR]: () => <hr />,

      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return <div className="py-8">Image Here</div>;
      },

      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const { author, remark } = node?.data?.target?.fields;

        return <div className="my-20">{children}</div>;
      },

      [INLINES.HYPERLINK]: (node) => {
        const { content, data } = node;

        return (
          <a
            className="cursor-pointer text-blue-500 hover:underline hover:text-blue-700"
            href={data.uri}
            target="_blank"
            rel="noreferrer"
          >
            {content[0].value}
          </a>
        );
      },
    },

    renderMark: {
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <i>{text}</i>,
    },
  };
  return <div>{documentToReactComponents(JSON.parse(data.raw), options)}</div>;
};

export default Text;
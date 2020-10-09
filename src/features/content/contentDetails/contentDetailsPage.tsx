import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/store/rootReducer';
import { fetchContent } from './contentDetailsSlice';
import { DefaultRenderer } from "steem-content-renderer";
import renderHTML from 'react-render-html';
import Skeleton from 'react-loading-skeleton';

type Props = {
  author: string,
  permlink: string
}

export const ContentDetailsPage = ({ author, permlink }: Props) => {
  const dispatch = useDispatch();

  const renderer = new DefaultRenderer({
    baseUrl: "https://peakd.com/",
    breaks: true,
    skipSanitization: false,
    allowInsecureScriptTags: false,
    addNofollowToLinks: true,
    doNotShowImages: false,
    ipfsPrefix: "",
    assetsWidth: 640,
    assetsHeight: 480,
    imageProxyFn: (url: string) => url,
    usertagUrlFn: (account: string) => "/@" + account,
    hashtagUrlFn: (hashtag: string) => "/trending/" + hashtag,
    isLinkSafeFn: () => true,
  });

  const {
    content,
    error: contentError,
    isLoading
  } = useSelector((state: RootState) => state.content);

  useEffect(() => {
    dispatch(fetchContent(author, permlink));
  }, [dispatch]);

  if (contentError) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <div>{contentError.toString()}</div>
      </div>
    )
  };

  let renderContent = isLoading ? (
    <Skeleton count={5} height={30} duration={3} /> 
  ) : (
    renderHTML(renderer.render(content.body))
    );

  return (
    <>
      {renderContent}
    </>
  );
}

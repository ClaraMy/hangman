import React, { useState } from 'react';
import './KeySvg.css';

export const KeySvg = ({ status }) => {

  return (
    <svg width="82" height="74" viewBox="0 0 82 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.17963 13.1183C3.90727 11.6203 3.43023 10.1369 3.16837 8.62988C3.06103 8.01218 3.60828 7.71993 4.10317 8.10485C4.59103 8.48429 6.04414 8.60728 6.65904 8.60728C8.98785 8.60728 11.4068 8.79802 13.7259 8.59636C14.56 8.52383 15.2156 7.99423 16.0196 7.86455C16.7531 7.74625 17.5281 7.71414 18.2697 7.62426C22.6042 7.09886 27.0317 8.01747 31.3876 8.01747C35.7051 8.01747 39.9939 7.22142 44.2434 6.54293C48.685 5.83376 53.1577 5.65606 57.5689 4.89363C59.5191 4.55655 61.5109 4.70046 63.4452 4.23828C65.0628 3.85178 66.5537 3.49554 68.2293 3.49554C69.546 3.49554 70.3756 3.64348 71.1128 4.84994C71.5072 5.49533 72.0085 6.13079 72.0085 6.93614C72.0085 8.09039 71.6153 9.14542 71.6153 10.2894C71.6153 15.3891 72.5983 20.3769 72.5983 25.4826C72.5983 28.9347 72.4269 32.4204 72.9041 35.848C73.2565 38.3786 73.7934 40.9176 74.3677 43.4064C74.9848 46.0803 76.1573 48.5806 76.8362 51.2488C77.8249 55.1343 78.4965 58.7847 78.4965 62.7939C78.4965 63.9225 78.2134 64.9141 78.1032 66.016C77.9827 67.2218 76.5192 67.3726 75.7877 68.0258C75.0136 68.7169 73.6011 68.3753 72.5983 68.3753H68.3385C63.5184 68.3753 58.7884 68.4351 54.0082 69.118C52.2958 69.3626 50.5791 68.9829 48.8746 68.9651C46.5591 68.941 44.1991 68.8496 41.8842 68.7248C40.037 68.6253 38.1938 68.4642 36.3465 68.3644C34.5336 68.2664 32.7749 67.6396 30.9617 67.4797C29.1607 67.3207 27.0878 67.1687 25.2929 67.5124C24.2191 67.718 23.3323 68.28 22.2455 68.4627C17.8063 69.2088 13.4307 70.3077 8.98554 71.0404C7.63279 71.2634 8.09763 69.12 7.91513 68.1568C7.7076 67.0615 7.20887 65.9441 7.13963 64.8364C7.07819 63.8532 7.12871 62.849 7.12871 61.8655C7.12871 59.0938 7.00117 56.3897 6.74642 53.6299C6.51743 51.1491 6.65932 48.6555 6.40783 46.1807C6.06922 42.8489 5.57566 39.5391 5.27188 36.1976C4.88841 31.9794 4.96605 27.7582 4.96605 23.5274C4.96605 19.9973 4.81289 16.6012 4.17963 13.1183Z" fill={status} stroke="black" stroke-width="5.06516" stroke-linecap="round"/>
    </svg>
  );
};
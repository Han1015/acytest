import React, { useState, useEffect, useCallback } from "react";

/**
 *
 * @param {number|undefined} minWidth props
 * @param {number|undefined} maxWidth props
 * @returns {boolean}
 */
export default function useWindowSize(props) {
  const [mediaStatus, setMediaStatus] = useState(false);

  const handleReSize = () => {
    let windowWidth = window.innerWidth;
    let { minWidth, maxWidth } = props;

    if (minWidth && !maxWidth) {
      windowWidth >= minWidth ? setMediaStatus(true) : setMediaStatus(false);
    }
    if (maxWidth && !minWidth) {
      windowWidth <= maxWidth ? setMediaStatus(true) : setMediaStatus(false);
    }
    if (minWidth && maxWidth) {
      windowWidth >= minWidth && windowWidth <= maxWidth
        ? setMediaStatus(true)
        : setMediaStatus(false);
    }
  };

  useEffect(() => {
    handleReSize();
    window.addEventListener("resize", handleReSize);
    return () => window.removeEventListener("resize", handleReSize);
  }, []);

  return mediaStatus;
}

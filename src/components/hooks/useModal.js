import { useState } from 'react'

function useModal() {
  const [mTitle, setMtitle] = useState("");
  const [mMessage, setMmessage] = useState("");
  const [mShow, setMshow] = useState(false);

  const showModal = () => setMshow(!mShow);

  return {
    mTitle,
    setMtitle,
    mMessage,
    setMmessage,
    mShow,
    showModal
  }
}

export default useModal;

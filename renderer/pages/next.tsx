import React, { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { TextareaAutosize } from '@mui/base';
import findTopics from '../@utils/findTopic';
import { SavedText } from '../../resources/mock';
import { Popper } from '@mui/material';


const MOCK_DB: SavedText[] = [
  {
      textTopic: "Riggurt the Brash",
      text: [`Hail! I am Rigurt the Brash. I lead our Glorious Expedition for Nord Cultural Exchange to the Dark Elves.
      Excuse please, Dunmer. The proper term for puny ones is Dunmer. Small, I mean. Not puny`, `The Skald-King is in Solitude? Shor's bones, no one tells Rigurt anything!
      Well. Rigurt has neveras failed a mission! He will do his best to see this one through, for the good of his people!`]
  }
]

function Next() {
  const [value, setValue] = useState<string>("")
  const [openPopper, setOpenPopper] = useState<boolean>(false);
  
  const handleValue = useCallback((event) => setValue(event.target.value), [value])

  const topics = useMemo(() => findTopics(MOCK_DB, value), [value])

  const displayTopic = useCallback((topic: string, DB: SavedText[]) => {
    const item = DB.find((item) => item.textTopic == topic)

    if (item) {
      return item.text.map((text, index) => <p key={index}>{text}</p>)
    } else {
      return null;
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-javascript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/home">
            <a>Go to home page</a>
            
          </Link>
        </p>
      </div>
      <div>
        <TextareaAutosize minRows={3} onChange={handleValue}/>
      </div>
      <div>
        {
          topics.length > 0 && topics.map((topic, index) => {
            return (
              <>
                <p onMouseLeave={() => setOpenPopper(false)} onMouseOver={() => setOpenPopper(true)} key={index}>{topic}</p>
                <Popper open={openPopper}>
                  {
                    displayTopic(topic, MOCK_DB)
                  }
                </Popper>
              </>
            )
          })
        }
      </div>
    </React.Fragment>
  );
};

export default Next;

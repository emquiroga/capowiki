import { SavedText } from "../../resources/mock";

export default function findTopics(savedTexts: SavedText[], longString: string) {
    const foundTopics = savedTexts.reduce((acc, savedText) => {
      if (longString.includes(savedText.textTopic.trim().toLocaleLowerCase())) {
        acc.push(savedText.textTopic);
      }
      return acc;
    }, []);
    
    // console.log(`Found topics: ${foundTopics.join(', ')}`);

    return foundTopics;
  }
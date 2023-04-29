export interface SavedText {
    textTopic: string;
    text: string[],
}

export const MOCK_DB: SavedText[] = [
    {
        textTopic: "Riggurt the Brash",
        text: [`Hail! I am Rigurt the Brash. I lead our Glorious Expedition for Nord Cultural Exchange to the Dark Elves.
        Excuse please, Dunmer. The proper term for puny ones is Dunmer. Small, I mean. Not puny`, `The Skald-King is in Solitude? Shor's bones, no one tells Rigurt anything!
        Well. Rigurt has never failed a mission! He will do his best to see this one through, for the good of his people!`]
    }
]
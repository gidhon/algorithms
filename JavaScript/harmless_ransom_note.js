function harmlessRansomNote(noteText, bookText) {

    // create arrays from the source texts
    const noteWords = noteText.split(' ');
    const bookWords = bookText.split(' ');

    // create hash table
    let bookVocabulary = {};

    // linear time complexity: O(m)
    bookWords.forEach(word => {
        // add newly encountered words
        if (!bookVocabulary[word]) bookVocabulary[word] = 0;
        // increment the word count
        bookVocabulary[word]++;
    });

    let canWriteNote = true;

    // linear time complexity: O(n)
    noteWords.forEach(word => {

        if (bookVocabulary[word] > 0) {
            bookVocabulary[word]--;
        } else canWriteNote = false;

    });

    return canWriteNote;

}

// This should be composable from our source text, and thus return true.
const noteText = 'When a sojourner in Massachusetts, I am in the woods, again.';

// The source text.
const bookText = `
    When I wrote the following pages, or rather the bulk of them, I lived 
    alone, in the woods, a mile from any neighbor, in a house which I had 
    built myself, on the shore of Walden Pond, in Concord, Massachusetts, 
    and earned my living by the labor of my hands only. I lived there two 
    years and two months. At present I am a sojourner in civilized life again.`;

harmlessRansomNote(noteText, bookText);

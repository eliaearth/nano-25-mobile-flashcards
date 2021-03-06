import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'UdaciMobileFlashCard:decks03';


export function setDummyData () {
    let dummyData ={
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    };

    return AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(dummyData));
}
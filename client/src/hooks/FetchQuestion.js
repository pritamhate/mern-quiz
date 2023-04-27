/** Fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
    const [getData, setGetData] = useState({
        loading: false,
        apiData: [],
        serverError: false
    });
}
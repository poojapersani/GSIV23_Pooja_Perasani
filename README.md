# GSIV23_Pooja_Perasani
React Project

# Movie Search App

This project is a Movie Search App built using React. It allows users to search for movies, view their details, and browse upcoming movies.

## Instructions

To run and test the code:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Create a `.env` file in the root directory of the project.
4. Obtain an API key from TMDb by following these steps:
   - Sign up or log in to your account on [TMDb](https://www.themoviedb.org/).
   - Go to your account settings and navigate to the "API" section.
   - Create a new API key for the "Read Access Token" permission.
5. Add your API key to the `.env` file using the following format:
    - REACT_APP_API_KEY=your_api_key_here
6. Save the `.env` file.
7. Open your terminal and navigate to the project directory.
8. Install dependencies by running: `npm install`.
9. Start the app by running: `npm start`.    
10. Open your browser and navigate to `http://localhost:3000` to view the app.

## Demonstrating Proficiency

1. **Routing:** Used React Router to implement routing for different pages (Movie List, Details, etc.).
2. **API Integration:** Fetched data from the TMDB API to display movie information.
3. **State Management:** Utilized React state to manage movie data and search results.
5. **Component Composition:** Broke down the app into reusable components for better organization.

## Challenge Elements 
1. **ScrollEffect:** Creating scroll event for infinite scrolling was new for me.
2. **react-router-dom:** Faced  errors with the latest version for react router dom.
3. **react redux:** i didn't use react as i'm still a learner and didn't fully aware of that concept.
4. **Handling empty or null data:** i couldn't handle the data that was coming undefined or null tried to use optional chaining etc.. but couldn't restrict all data

## Future Improvements

1. **Pagination:** Implement pagination for search results and upcoming movies to enhance user experience.
2. **Unit Testing:** Write unit tests for components and API integration using testing frameworks like Jest and React Testing Library.
3. **Caching:** Implement caching of API responses to reduce unnecessary requests.
4. **Error Handling:** Enhance error handling to display user-friendly error messages when API requests fail.

## Feedback

Overall, the challenge was a great opportunity to showcase my React skills. Adding more specific details about the expected behavior and user interactions in the challenge description could help provide clearer guidance.
Few of the data was missing in api response that i have to display as part of the project.


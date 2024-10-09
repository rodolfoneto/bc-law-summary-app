# BC Laws Summary - Frontend

This is the frontend component of the BC Laws Search Tool, built with React. The application allows users to search BC legislation documents via the BC Laws API and displays AI-generated summaries. The UI is designed to be simple and functional.

## Features

- Search Functionality: Users can search for legislation documents based on topics and jurisdiction.
- Summary Display: Utilizes an LLM API to summarize documents and present concise information to the user.

##### Installation

###### Clone the repository:

```bash
git clone https://github.com/rodolfoneto/bc-law-summary-app.git
```

###### Navigate to the project directory:

cd bc-law-summary-app
Install dependencies:

```
npm install
```

Set up environment variables in the .env file to configure the API endpoints.

Usage

Start the development server:

```
npm start
```

Open your browser and navigate to http://localhost:3000 to access the application.

## Assumptions

- The BC Laws API and the LLM API are both publicly accessible and configured correctly in the environment variables.

- CORS issues were encountered and addressed during development to ensure API requests function as expected.
  Improvements
- Pagination: Implement pagination for better navigation through search results.
- Performance Optimization: Optimize loading times for better performance.
- User Feedback: Enhance feedback mechanisms, such as loading spinners and error messages, to improve the user experience.

## Deployment

The frontend can be deployed using services like GitHub Pages, Vercel, or Netlify. Ensure the backend API is accessible to the frontend for seamless integration.

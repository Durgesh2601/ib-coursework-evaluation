```markdown
# Coursework Evaluation Web App

This is a web application for evaluating International Baccalaureate (IB) coursework. The application allows users to upload their coursework, select the type and subject, and get an evaluation of their score.

## Deployed URL

You can access the live application at: [https://ib-coursework-evaluation-chi.vercel.app/](https://ib-coursework-evaluation-chi.vercel.app/)

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Assumptions and Design Decisions](#assumptions-and-design-decisions)
- [Implemented Features](#implemented-features)
- [Bonus Points](#bonus-points)
- [Challenges Faced](#challenges-faced)
- [Conclusion](#conclusion)

## Setup Instructions

To get the project up and running locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Durgesh2601/ib-coursework-evaluation.git
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the application in your browser**:
   Navigate to `http://localhost:3000` to see the app in action.

## Assumptions and Design Decisions

- The app is built with **Next.js 14** and **React**.
- We used **Zustand** for state management to handle the active tab in the coursework section.
- **Shadcn UI components** and **TailwindCSS** were used for styling and UI design.
- The app is designed to be mobile-responsive, with specific layouts adjusted for different screen sizes.
- Local storage is used to save uploaded files and form data, ensuring persistence across page reloads.

## Implemented Features

1. **File Upload with Validation**:
   - Users can upload files with a maximum size of 25MB.
   - Only PDF files are accepted.
   - The uploaded files are stored locally using Local Storage.

2. **Coursework Details Form**:
   - Dropdowns for "Coursework Type" and "Subject" with predefined options.
   - Text input for entering the essay title.
   - Form validation to ensure all fields are required.

3. **Tabbed Interface for Coursework Categories**:
   - A tabbed interface to switch between different coursework types (e.g., IA Example, EE Example, IO Example).
   - Each tab displays a list of coursework examples.

4. **Evaluation Display**:
   - Displays an overall score with a circular progress indicator.
   - Shows a breakdown of scores by criteria (A, B, C).
   - Includes the evaluation date.

5. **Responsive Design**:
   - The layout adjusts based on screen size, with certain elements hidden or displayed differently on smaller screens.

## Bonus Points

- Implemented Local Storage to ensure persistence of uploaded files and form data.
- Created a custom component using Shadcn and TailwindCSS to match the design requirements.
- Used Day.js for date formatting.

## Challenges Faced

- **Next.js 14**:
  - This was my first time creating an application in Next.js 14. I encountered challenges related to routing and the new app directory structure.
  - Overcame these challenges by thoroughly going through the [Next.js documentation](https://nextjs.org/docs) and experimenting with different setups.

- **Responsive Design**:
  - Ensuring that the application was fully responsive across all screen sizes required careful consideration of the layout, particularly with the sidebar and image placement.

- **State Management**:
  - Managing the state across multiple components and tabs was challenging but was effectively handled using **Zustand**.

## Conclusion

This project has been a great learning experience, especially with the use of Next.js 14, Zustand, and Shadcn UI components. The application is now fully functional, responsive, and meets all the specified requirements.
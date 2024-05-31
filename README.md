# nutrition-scheduler

Please create an HTML page for a diet plan with the following requirements:

The page should have a title "Diet Plan".

Include a style section within the head that defines the following styles:

The body should use the Arial, sans-serif font.
The .filter-container should have a margin-bottom of 20px.
The labels within the .filter-container should have a margin-right of 10px.
The .diet-plan table should have border-collapse set to collapse and width set to 100%.
The table headers (th) and data cells (td) in .diet-plan should have a border of 1px solid #ddd and padding of 8px.
The table headers (th) should have a background color of #f2f2f2.
The .reset-button should have a margin-top of 10px, white text color, red background color, no border, 10px padding, and a cursor set to pointer.
The .report-container should have a margin-top of 20px.
Within the body, include:

An h1 heading with the text "AFTERWAKE UP".
A div with the class filter-container containing labels and inputs for filtering the diet plan by Protein (g) , Fat (g) , Calories,Carbohydrate, Veg/Non-Veg,diesease, and Region of Origin, along with Filter and Reset buttons. The Veg/Non-Veg,deasies, and Region of Origin should be select dropdowns with appropriate options.
A table with the class diet-plan containing a header row with the columns: Select, Dish Name, Veg/Non-Veg, Protein (g), Carbohydrates (g), Calories, Fat (g), Region of Origin, Quantity, and Suitable for Diseases. The table body should be populated with rows of diet plan data using JavaScript.
Include a div with the class report-container containing an h2 heading with the text "After Wake Up" and an empty div with the ID selected-dishes-report.



Add a script section containing:

An array of objects named dietData representing diet plan data with attributes: name, veg, protein, carbs, calories, fat, region, quantity, diseases.
Functions to display the diet plan, filter the diet plan, reset the filters, toggle between Veg/Non-Veg, and update the report of selected dishes.
The JavaScript should include code to populate the table with data, handle filtering, resetting, and updating the report of selected dishes based on user interactions.



and make the obove code for 8 section -• After wakeup

• Breakfast

• Before lunch

• Lunch

• Afternoon snacks

• Before dinner

• Dinner

• After dinner and finally a button to combine all report and open a popup window

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/nutrition-scheduler.git
cd nutrition-scheduler
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

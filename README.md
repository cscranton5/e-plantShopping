# Coursera Final Project for Devloping Frount-End Apps with React
<a href="https://cscranton5.github.io/e-plantShopping/" target="_blank">Go to Site Here</a>

This website should contain the following things:

- A Landing page with a button linking to the product listing page

- A navigation bar with links to the landing, product listing, and shopping cart pages

- A card for each plant that showcases the different plants along with their images, name, description, cost and an Add to cart button.

- A minimum of two sections describing the plants in that section. For example, "Aromatic Plants" and "Medicinal Plants".
  
- A cart page which displays the products in the cart.
  
- The cart should have a card for each type of plant in the cart. Each card should have the thumbnail, the unit cost, the cost for all of the plants of that type and buttons to increase and decrease the quantity along with --Delete button.
  
- A Continue Shopping and Checkout buttons



## Process to deploy this Site on Github Pages

1. To deploy your react application in GitHub you need to install gh-pages. This allows you to use it as a tool for deploying your project to GitHub Pages. Perform given command in the terminal
    <pre>npm install gh-pages --save-dev  </pre>

3. Add given lines before "build": "vite build" in package.json file.
  <pre>
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",</pre>


4. Then in the vite.config.js file add this line before plugins: [react()]
  <pre>base: "/YOUR_REPOSITORY_NAME", </pre>

5. Now perform deploy command in the terminal to executes the "deploy" script defined in the package.json file, deploying the project to GitHub Pages using the gh-pages tool.
  <pre>npm run deploy</pre>

6. Perform git add and git commit commands to update changes in your code. Then perform git push command to update your GitHub repository for proper code management.

7. Go to your GitHub repository. Then, navigate to your site's repository that you created.

8. Under your repository name, click Settings.

9. Navigate to the left hand side navigation bar. In the Code and Automation section of the sidebar, click Pages.

10. You will see the page shown below. Click the drop down menu where you see None, then click gh-pages, and then click the Save button.

11. Click above generated link to see your live website.

Note: After deploying on GitHub Pages, it may take some time for all contents and images to appear properly. Please wait a few extra minutes for the application to load completely.

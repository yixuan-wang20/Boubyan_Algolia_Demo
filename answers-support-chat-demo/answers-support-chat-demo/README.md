# Answers demo: Algolia support chatbot

## Customise
### 1. Setup search
- Go to `src/config.js` and update the first block with the Algolia applications and index details.
- In the second block, edit the Answers parameters to your data.

## 2. Styling and Display
- To change out the main color, company name displayed and background blur go to the third block of `src/config.js`
- The last block allows to customize the content displayed within query suggestions.

### Images
- Update the logo replacing `./img/logo.svg` or `./img/logo.png`. In the third block of `src/config.js` update the logoFormat to `png` or `svg` regarding your logo.
- Update the background image by replacing `./img/background-image.png`. You can edit the blurring applied on the background editing the `blur` variable of the third block in `src/config.js`.
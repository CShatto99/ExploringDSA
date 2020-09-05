# Exploring Data Structures & Algorithms in Java

![HomePage](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/WebsiteHomePage.png)

### Introduction

At the start of summer 2019 I heard about and became interested in topics of data structures & algorithms. I knew this was going to be a class I would end up taking in the future but I wanted to teach myself prior. So I start reading  [Data Structures & Algorithms in Java, Second Edition](http://web.fi.uba.ar/~jvillca/hd/public/books/Data_Structures_and_Algorithms_in_Java_2nd_Edition.pdf) by Robert Lafore. I went through each chapter and solved as many assigned projects as I could. By the end of the summer I had covered 95% of the textbook, so the next step was to create a website showcasing and teaching these projects.

### What I Learned

* Used React functional and class components to structure the user-interface.
* Implemented the front-end and back-end of a contact form/page using the Node.js runtime environment.
* Used HTML5 and CSS3 grids to structure each and style every page on the site from scratch.

### Accessing the website

If you would like to see the website in its entirety, the domain is [https://exploringdsa.herokuapp.com](http://exploringdsa.herokuapp.com/). If you happen to find mistakes with any of the content, notify me through the contact page.

### Implementing the Contact Page

![ContactPage](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/WebsiteContactPage.png)

The reasons for creating a contact page were quite obvious. I needed a way for other people to: notify me about mistakes that were made in the website and ask questions about the content that was available.

So in order to implement this contact form, a few dependecies were necessary. The dependencies that I used were: [axios](https://www.npmjs.com/package/axios), [body-parser](https://www.npmjs.com/package/body-parser), [concurrently](https://www.npmjs.com/package/concurrently), [express](https://www.npmjs.com/package/express), [nodemailer](https://www.npmjs.com/package/nodemailer) and [nodemon](https://www.npmjs.com/package/nodemon). If you would like to see the implementation is detail, the code to the front-end and back-end files are [here](https://github.com/CShatto99/Resume-Projects/tree/master/READMECodeFiles).

### Designing the CSS Grid Layout

When it came time to decide which method I wanted to use to design the basic layout of each page, I knew that CSS grids was my best option. Although it took me a few attempts to create a reasonable layout, I am now quite satisfied with the result:

![WebsitePageLayout](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/WebsitePageLayout.png)

The image you see above is a very basic representation of the underlying structure of the home, introduction and contact pages and only part of the project pages.

For all of the project pages, a similar layout was used. The only difference is that the structure of the main content section consists of a nested grid. You can see the example here:

![WebsiteCodeLayout](https://github.com/CShatto99/Resume-Projects/blob/master/READMEImg/WebsiteCodeLayout.png)

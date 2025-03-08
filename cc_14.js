// Task 2: Adding Support Tickets Dynamically //

function createSupportTicket (name, issue, priority) { // creates function to create a ticket with name, issue, and priority
    const ticket =  document.createElement('div'); // creates each new ticket as a <div>
    ticket.setAttribute('class', 'support-ticket'); // set attributes

    const nameHeader = document.createElement('h3'); // adds a header for the name
    nameHeader.textContent = name; // sets the header as the name

    const issueParagraph = document.createElement('p'); // adds a paragraph for the issue
    issueParagraph.textContent = issue; // sets the paragraph as the issue

    const priorityLabel = document.createElement('label'); // adds a label for the priority
    priorityLabel.textContent = priority; // sets the priority as the priority label

    const resolveButton = document.createElement('button'); // creates the remove button
    resolveButton.textContent = 'Resolve'; // adds "Resolve" as the text for the button

    ticket.appendChild(nameHeader); // appends the name header
    ticket.appendChild(issueParagraph); // appends the issue paragraph
    ticket.appendChild(priorityLabel); // appends the priority label
    ticket.appendChild(resolveButton); // appends the resolve button

    if (priority === 'High') {  // if ticket is high priority
        ticket.classList.add('high-priority'); // Add the class 'high-priority'
    }
    const ticketContainer = document.getElementById('ticketContainer'); //gets the container
    ticketContainer.appendChild(ticket); // appends the tickets

    // Task 3: See bottom of code //
}

createSupportTicket('Susan', 'Laptop does not work', 'High'); // Test data ticket 1
createSupportTicket('Brian', 'Needs SQL installation', 'Medium'); // Test data ticket 2
createSupportTicket('Larry', 'Wants a second mouse to use when working remotely', 'Low'); // Test data ticket 3


// Task 3: Converting NodeLists to Arrays for Bulk Updates //

function highlightHighPriorityTickets () { // function to highlight high priority tickets
    const highPriorityTickets = document.querySelectorAll('.high-priority'); // selects all tickets labelled high priority
    const ticketsArray = Array.from(highPriorityTickets); // converts the node list to an array

    ticketsArray.forEach(ticket => {  // for each high priority ticket
        ticket.style.backgroundColor = '#FF474C'; // highlights the high priority ticket red
        ticket.style.border = '2px solid black'; // gives each ticket black border
    });
}

highlightHighPriorityTickets(); // calls the function

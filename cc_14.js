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

    if (priority === 'High') {  // if the priority is high
        ticket.classList.add('high-priority');  // make the class high priority
    }

    const ticketContainer = document.getElementById('ticketContainer'); //gets the container
    ticketContainer.appendChild(ticket); // appends the tickets

    // Task 3: See bottom of code //

    // Task 4: Implementing Ticket Resolution with Event Bubbling //

    resolveButton.addEventListener('click', (event) => {  // adds event listener to the resolve button
        event.stopPropagation(); // stops propagation
        ticketContainer.removeChild(ticket); // removes the ticket from the parent upon clicking resolve
        console.log(`${nameHeader.textContent}'s ticket has been resolved!`); // Message that ticket has been resolved
    });

    ticketContainer.addEventListener('click', () => { // adds an event listener to the container
        console.log(`Ticket has been clicked!`); // adds message that any ticket has been clicked
    });

    // Task 5:  Additional Challenge – Inline Editing of Support Tickets //

    const editButton = document.createElement('button'); // creates edit button
    editButton.textContent = 'Edit'; // creates text for the button as "Edit"
    ticket.appendChild(editButton); // Appends the edit button to the card

    editButton.addEventListener('click', () => {  // adds event listener to the edit Button'
        
        const nameInput = document.createElement('input'); // creates input for name
        nameInput.value = nameHeader.textContent; // pre-populates the edit field with the current name

        const issueInput = document.createElement('input'); // creates input for issue
        issueInput.value = issueParagraph.textContent; // pre-populates the edit field with current issue

        const priorityInput = document.createElement('input'); // creates input for priority
        priorityInput.value = priorityLabel.textContent; // pre-populates the priority field with current status

        const saveButton = document.createElement('button'); // creates save button
        saveButton.textContent = 'Save'; // creates text "Save" for the button

        ticket.replaceChild(nameInput, nameHeader); // replaces current text with updated text for name
        ticket.replaceChild(issueInput, issueParagraph); // replaces current with updated for issue
        ticket.replaceChild(priorityInput, priorityLabel); // replaces current with updated for priority
        ticket.replaceChild(saveButton, editButton); // replaces the edit with the save button

        saveButton.addEventListener('click', () => { // adds listener for clicking the save button
            nameHeader.textContent = nameInput.value; // replaces name header with new input value
            issueParagraph.textContent = issueInput.value; // replaces position with new input issue
            priorityLabel.textContent = priorityInput.value; // replaces position with new priority

        if (priorityInput.value === 'High') {  // if ticket is high priority
            ticket.classList.add('high-priority'); // Add the class 'high-priority'
        } else {
            ticket.classList.remove('high-priority'); // Remove the class if it's not 'High'
        }

        highlightHighPriorityTickets (); // calls the function to highlight the tickets

        ticket.replaceChild(nameHeader, nameInput); // replaces input with updated info for name
        ticket.replaceChild(issueParagraph, issueInput); // replaces input with updated info for issue
        ticket.replaceChild(priorityLabel, priorityInput); // replaces input with updated info for priority
        ticket.replaceChild(editButton, saveButton); // replaces edit button with save button
        
        console.log('Ticket details updated.'); // message to confirm updated details
        });
    });
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

    const nonHighPriorityTickets = document.querySelectorAll('.support-ticket:not(.high-priority)');  // select all non-high priority tickets
    const nonHighPriorityArray = Array.from(nonHighPriorityTickets); // creates array for non high priority

    nonHighPriorityArray.forEach(ticket => {  // for each non high priority ticket
        ticket.style.backgroundColor = ''; // Removes background color
        ticket.style.border = ''; // Removes border
    });
}

highlightHighPriorityTickets(); // calls the function

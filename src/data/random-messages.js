import moment from 'moment';

export default [
    {
        subject: 'Confirm your subscription',
        content: `
            <p>Hello Bo,</p>
            <p>Thank you for subscribing to our newsletter!</p>
            <p>Before we can start spamming your mailbox, please confirm your subscription by clicking the below link.</p>
            <p><a href="#">Confirm Subscription</a></p>
            <p>Thanks again!</p>
        `,
        isImportant: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'Coding Explained',
            email: 'irony@codingexplained.com'
        },
        attachments: []
    },
    {
        subject: 'CrunchBase Daily',
        content: `
            <p>Here's what happened yesterday.</p>
            <ul>
                <li>Seed Capital announced a $1 billion investment in Coding Explained. The company's CEO, Bo Andersen, comments that he is proud of the investment, and that this capital was needed for completing the company's major project; its Vue.js course.</li>
                <li>Coding Explained's YouTube channel once again sets new view record, for the 400th day in a row.</li>
                <li>Cats are still cute, according to major research carried out by Gartner. "Shocking," the company states in its latest press release, following the breaking news.</li>
            </ul>
            <p>Try to pay more attention next time.</p>
        `,
        isImportant: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'CrunchBase',
            email: 'daily@crunchbase.com'
        },
        attachments: []
    },
    {
        subject: 'Design',
        content: `
            <p>Hey Bo, here's the design that you requested.</p>
            <p>Let me know what you think. Hope you like it!</p>
            <p>Sarah</p>
        `,
        isImportant: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'Sarah',
            email: 'sarah-designer@gmail.com'
        },
        attachments: [
            {
                fileName: 'design.psd',
                size: 14700000
            }
        ]
    }
]
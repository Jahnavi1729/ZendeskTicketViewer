export class tickets
{
    requester_id: number;
    assignee_id: number;
    subject: string;
    description: string;

    constructor(requester_id: number, assignee_id: number, subject: string, description: string)
    {
        this.requester_id = requester_id;
        this.assignee_id = assignee_id;
        this.subject = subject;
        this.description = description;
    }
}
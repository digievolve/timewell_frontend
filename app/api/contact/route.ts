import { NextRequest, NextResponse } from "next/server";

function getEmailInboxes(): string[] {
  const inboxes: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const e = process.env[`CONTACT_EMAIL_${i}`];
    if (e) inboxes.push(e);
  }
  
  if (inboxes.length === 0) {
    inboxes.push(process.env.CONTACT_EMAIL ?? "info@timewellcareservices.co.uk");
  }
  return inboxes;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, ...data } = body;

    // TODO: Replace this section with your chosen email provider
    // Options: Resend, SendGrid, NodeMailer, AWS SES, etc.
    // Example with Resend:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // const inboxes = getEmailInboxes();
    // await resend.emails.send({
    //   from: "noreply@timewellcareservices.co.uk",
    //   to: inboxes,
    //   subject: `New ${type} enquiry from ${data.name ?? data.fullName}`,
    //   text: JSON.stringify(data, null, 2),
    // });

    // For now: log to console (replace with real email service)
    console.log("[Contact API] New submission:", { type, ...data });
    console.log("[Contact API] Would send to:", getEmailInboxes());

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API] Error:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

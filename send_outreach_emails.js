const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'canadianwebdesigns.emails@gmail.com',
    pass: 'ouythhnirkjrrlmp'
  }
});

const emails = [
  {
    to: 'info@surreybizconnect.ca',
    subject: 'Is Your Surrey BC Business on Page 1 of Google? (Free Audit Inside)',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #1a5276;">Is Your Surrey Business Missing Out on Google Page 1?</h2>
        <p>Hi there,</p>
        <p>My name is <strong>Ryan</strong> from <strong>Canadian Web Designs</strong> — a local digital marketing agency with <strong>180+ five-star reviews</strong> and a proven track record of getting Surrey businesses to <strong>Page 1 of Google in 60–90 days</strong>.</p>
        <p>We specialize in Surrey neighbourhoods including <strong>Newton, Guildford, and South Surrey</strong> — meaning we know exactly which keywords your local customers are typing right now.</p>
        <p>We'd love to offer you a <strong>completely free SEO audit</strong> with zero obligation. You'll find out:</p>
        <ul>
          <li>Why competitors are outranking you</li>
          <li>Which local keywords you're missing</li>
          <li>A clear action plan to reach Page 1</li>
        </ul>
        <p>Ready to grow your Surrey business online? Give us a call or reply to this email.</p>
        <p style="font-size: 18px;"><strong>📞 (647) 689-6069</strong></p>
        <p>Best regards,<br><strong>Ryan</strong><br>Canadian Web Designs<br><a href="https://canadianwebdesigns.ca">canadianwebdesigns.ca</a></p>
      </div>
    `
  },
  {
    to: 'hello@londonontariobusiness.ca',
    subject: 'Free Web Design & SEO Audit for London Ontario Businesses — Limited Spots',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #1a5276;">London Ontario Business Owners: Is a Toronto Agency Stealing Your Local Traffic?</h2>
        <p>Hi there,</p>
        <p>I'm <strong>Ryan</strong> from <strong>Canadian Web Designs</strong>, and I want to be direct: most London Ontario businesses are losing local customers to websites built by Toronto agencies that don't understand <strong>London-specific geo-targeting</strong>.</p>
        <p>We fix that. With <strong>180+ five-star reviews</strong>, we build custom websites from <strong>$1,499</strong> and run SEO campaigns specifically designed to dominate London Ontario search results — not generic province-wide rankings.</p>
        <p>We're currently offering a <strong>free web design & SEO audit</strong> for London businesses — limited spots available.</p>
        <p>You'll receive:</p>
        <ul>
          <li>A full review of your current online presence</li>
          <li>London Ontario keyword gap analysis</li>
          <li>A custom growth roadmap — no cost, no pressure</li>
        </ul>
        <p>Book your free consultation today before spots fill up.</p>
        <p>Best regards,<br><strong>Ryan</strong><br>Canadian Web Designs<br><a href="https://canadianwebdesigns.ca">canadianwebdesigns.ca</a></p>
      </div>
    `
  },
  {
    to: 'contact@edmontonsmallbiz.ca',
    subject: 'Edmonton Businesses: Are You Missing Page 1 Google Rankings in 2026?',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #1a5276;">Edmonton Has Lower SEO Competition Than Calgary — Here's How to Win</h2>
        <p>Hi there,</p>
        <p>I'm <strong>Ryan</strong> from <strong>Canadian Web Designs</strong>, and here's something most Edmonton business owners don't realize: <strong>Edmonton keywords have lower competition than Calgary</strong> — meaning faster, more affordable Page 1 Google rankings in 2026.</p>
        <p>We've helped businesses in <strong>energy, healthcare, and trades</strong> across Alberta dominate local search — backed by <strong>180+ five-star reviews</strong>.</p>
        <p>We're offering Edmonton businesses a <strong>free SEO audit</strong> to show you exactly what's holding your rankings back and how quickly we can fix it.</p>
        <p>What you get:</p>
        <ul>
          <li>Edmonton-specific keyword opportunity report</li>
          <li>Competitor ranking breakdown</li>
          <li>A clear, honest plan to reach Page 1</li>
        </ul>
        <p>No contracts. No pressure. Just results.</p>
        <p>Reply to this email or call us to claim your free audit today.</p>
        <p>Best regards,<br><strong>Ryan</strong><br>Canadian Web Designs<br><a href="https://canadianwebdesigns.ca">canadianwebdesigns.ca</a></p>
      </div>
    `
  }
];

async function sendEmails() {
  const results = [];
  for (const email of emails) {
    try {
      const info = await transporter.sendMail({
        from: '"Canadian Web Designs" <canadianwebdesigns.emails@gmail.com>',
        to: email.to,
        subject: email.subject,
        html: email.html
      });
      results.push({ to: email.to, status: 'SUCCESS', messageId: info.messageId });
      console.log(`SUCCESS: Email sent to ${email.to} | MessageId: ${info.messageId}`);
    } catch (err) {
      results.push({ to: email.to, status: 'FAILED', error: err.message });
      console.log(`FAILED: Email to ${email.to} | Error: ${err.message}`);
    }
  }
  console.log('\n--- SUMMARY ---');
  results.forEach(r => {
    if (r.status === 'SUCCESS') {
      console.log(`[SUCCESS] ${r.to}`);
    } else {
      console.log(`[FAILED]  ${r.to} — ${r.error}`);
    }
  });
}

sendEmails();

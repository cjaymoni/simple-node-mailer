const RETRY_HTML_TEMPLATE = (pipeline, retries, bandwidth) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>NodeMailer Email Template</title>
      <style>
      .container {
        width: 100%;
        height: 100%;
        padding: 5%;
        background-color: #cfe7f5;
      }
      p {
        margin-bottom: 2rem;
      }
      .email {
        width: 100%;
        background-color: #fff;
        padding: 5%;
      }
      .email-header {
        background-color: #3e8af3fd;
        color: #fff;
        padding: 1%;
        text-align: center;
      }
      .email-body {
        padding: 20px;
      }
      .email-footer {
        background-color: #3e8af3fd;
        color: #fff;
        padding: 1%;
        text-align: center;
      }
      .result {
        background-color: #f33e3efd;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      .pipeline {
        background-color: #b6c4bbfd;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      .bandwidth {
        background-color: #c076eed1;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      .retries {
        background-color: #c2ee76d1;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="email">
        <div class="email-header">
          <h1>Failed Pipeline Run. Retry Underway!</h1>
        </div>
        <div class="email-body">
          <p>
            The pipeline <span class="pipeline"> ${pipeline}</span> has failed to
            run successfully but a retry action has been executed.
          </p>
          <p>Thanks for your patience as we work to smooth out any wrinkles.</p>
          <p>No. of retries: <span class="retries">${retries}</span></p>
          <p>Band width: <span class="bandwidth">${bandwidth}</span></p>
          <p>Status: <span class="result">Retrying</span></p>
        </div>
        <div class="email-footer">
          <p>EMAIL FOOTER</p>
        </div>
      </div>
    </div>
  </body>
    </html>
  `;
};

export default RETRY_HTML_TEMPLATE;

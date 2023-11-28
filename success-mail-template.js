const SUCCESS_HTML_TEMPLATE = (pipeline, bandwidth) => {
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
        background-color: #3ef380fd;
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
    </style>
  </head>
  <body>
    <div class="container">
      <div class="email">
        <div class="email-header">
          <h1>Pipeline Completed</h1>
        </div>
        <div class="email-body">
          <p>Congratulations!</p>
          <p>
            Your pipeline <span class="pipeline"> ${pipeline}</span> has been
            processed successfully, ensuring a seamless workflow.
          </p>
          <p>Band width: <span class="bandwidth">${bandwidth}</span></p>
          <p>Status: <span class="result">Success</span></p>
        </div>
        <div class="email-footer">
      
        </div>
      </div>
    </div>
  </body>
    </html>
  `;
};

export default SUCCESS_HTML_TEMPLATE;

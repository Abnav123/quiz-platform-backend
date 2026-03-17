<h1>Authentication API (Node.js + Express + MongoDB)</h1>

<p>
A backend authentication system built using <b>Node.js</b>, <b>Express</b>, and 
<b>MongoDB Atlas</b>. This project provides RESTful APIs for 
<b>user registration and authentication</b>, designed to integrate easily with frontend applications.
</p>

<hr>

<h2>Features</h2>
<ul>
<li>User registration API</li>
<li>Secure password hashing</li>
<li>RESTful API architecture</li>
<li>MongoDB Atlas cloud database integration</li>
<li>Environment variable configuration using <code>.env</code></li>
<li>Modular backend structure</li>
</ul>

<hr>

<h2>Tech Stack</h2>
<ul>
<li><b>Backend:</b> Node.js</li>
<li><b>Framework:</b> Express.js</li>
<li><b>Database:</b> MongoDB Atlas</li>
<li><b>ODM:</b> Mongoose</li>
<li><b>API Testing:</b> Postman</li>
</ul>

<hr>

<h2>Project Structure</h2>

<pre>
project-root
│
├── controllers
│   └── authController.js
│
├── models
│   └── User.js
│
├── routes
│   └── authRoutes.js
│
├── config
│   └── db.js
│
├── server.js
├── package.json
└── .env
</pre>

<hr>

<h2>Installation</h2>

<h3>Clone the repository</h3>
<pre>git clone https://github.com/your-username/your-repo-name.git</pre>

<h3>Navigate to project directory</h3>
<pre>cd your-repo-name</pre>

<h3>Install dependencies</h3>
<pre>npm install</pre>

<hr>

<h2>Environment Variables</h2>

<p>Create a <code>.env</code> file in the root directory:</p>

<pre>
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
</pre>

<p><b>Note:</b> Never commit real database credentials publicly.</p>

<hr>

<h2>Running the Server</h2>

<pre>npm start</pre>

<p>Server runs at:</p>

<pre>http://localhost:5000</pre>

<hr>

<h2>API Endpoints</h2>

<h3>Register User</h3>
<pre>POST /api/auth/register</pre>

<h3>Example Request Body</h3>

<pre>
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
</pre>

<hr>

<h2>Database</h2>

<p>
This project uses <b>MongoDB Atlas</b>, a cloud-hosted MongoDB platform for scalable and secure database management.
</p>

<hr>

<h2>Future Improvements</h2>
<ul>
<li>JWT authentication implementation</li>
<li>Login endpoint</li>
<li>Role-based authorization</li>
<li>Input validation middleware</li>
<li>Deployment using Docker or cloud platforms</li>
</ul>

<hr>

<h2>Screenshots</h2>

<h3>API Testing (Postman)</h3>
<img src="https://github.com/user-attachments/assets/70ea88fd-65cf-4196-91c0-1265aa1e3ffd" width="100%">

<h3>Database (MongoDB Atlas)</h3>
<img src="https://github.com/user-attachments/assets/06c616ef-93be-4328-bed9-a74f73677ee7" width="100%">

<h3>Server Running</h3>
<img src="https://github.com/user-attachments/assets/d79f092c-7c30-4fd7-9039-973e803d7972" width="100%">

<br>

<details>
<summary><b>More Screenshots (Development & Debugging)</b></summary>

<br>

<img src="https://github.com/user-attachments/assets/c32bc7bf-dc74-4c31-88eb-629140ff6dc3" width="100%"><br><br>

<img src="https://github.com/user-attachments/assets/21a0e960-10b0-4941-b25f-c530ac0d3f0f" width="100%"><br><br>

<img src="https://github.com/user-attachments/assets/a4e81b72-3abe-4db3-843f-843ef608f047" width="100%"><br><br>

<img src="https://github.com/user-attachments/assets/09d86e77-9597-4923-8c8d-856ef2b510a5" width="100%"><br><br>

<img src="https://github.com/user-attachments/assets/d067c5e6-9bba-4d39-a5c6-d708b4f236d9" width="100%">

</details>

<hr>

<h2>Author</h2>

<p>Developed as part of backend development practice and system design learning.</p>

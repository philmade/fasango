
# Fasango
A template for quickly prototyping web applications using FastAPI, Django, and HTMX.

## Features
- **FastAPI**: For creating high-performance APIs.
- **Django**: Used for its excellent admin interface.
- **HTMX**: For accessing AJAX, CSS Transitions, WebSockets and Server Sent Events directly in HTML.
- **Hyperscript**: For script and style as HTML attributes.
- **Supabase**: Used as a database. This template does not use its auth layer and instead relies on Django's auth because of its admin interface.

## How to use this template
1. Click the "Use this template" button to create a new repository with the same files and folders as this template.
2. Clone your newly created repository.
3. Install the required packages by running `pip install -r requirements.txt`.
4. Set up your Supabase database and configure the settings in your project accordingly.
5. Run the FastAPI application.
6. Access the Django admin interface and set up your admin user and other configurations.

## Configuration
- Supabase: Set up your Supabase database and configure the `SUPABASE_URL` and `SUPABASE_KEY` in your project settings.
- Django: Configure the Django settings as you normally would. Make sure to set up the Django admin user so you can access the admin interface.

## Running the application
Run the FastAPI application using `uvicorn`:

```
uvicorn main:app --reload
```

This will start the FastAPI application with hot-reloading enabled.

## Accessing the application
- FastAPI application: Access the FastAPI application by navigating to `http://127.0.0.1:8000` in your browser.
- Django admin interface: Access the Django admin interface by navigating to the admin URL configured in your Django settings.

## Contributing
If you have any ideas, just open an issue and tell me what you think.

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)

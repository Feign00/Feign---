# settings.py
INSTALLED_APPS = [
    # ...
    'django.contrib.staticfiles',
]

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
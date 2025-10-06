from django import forms


class ContactForm(forms.Form):
    contact_first_name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={
            'class': 'form-input',
            'autocomplete': 'given-name',
            'placeholder': 'First name'
        }))
    contact_last_name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={
            'class': 'form-input',
            'autocomplete': 'family-name',
            'placeholder': 'Last name'
        }))
    contact_organization = forms.CharField(
        max_length=100,
        required=False,
        widget=forms.TextInput(attrs={
            'class': 'form-input',
            'autocomplete': 'organization',
            'placeholder': 'Company'
        }))
    contact_email = forms.EmailField(
        max_length=100,
        widget=forms.EmailInput(attrs={
            'class': 'form-input',
            'autocomplete': 'email',
            'placeholder': 'Email address'
        }))
    contact_number = forms.RegexField(
        max_length=100,
        regex=r'^\+?1?[^A-Za-z]{9,15}$',
        error_messages={
            "invalid": "Please enter a valid phone number, e.g. '+64 22 123 4567'."
        },
        widget=forms.TextInput(attrs={
            'class': 'form-input',
            'autocomplete': 'tel-national',
            'placeholder': 'Phone number'
        }))
    contact_description = forms.CharField(
        widget=forms.Textarea(attrs={
            'class': 'form-textarea',
            'rows': '6',
            'placeholder': 'Tell us about your project, scope, and goals.'
        }))


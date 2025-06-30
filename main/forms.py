from django import forms


class ContactForm(forms.Form):
    contact_first_name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={
            'class': 'singleLine',
            'autocomplete': 'given-name'
        }))
    contact_last_name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={
            'class': 'singleLine',
            'autocomplete': 'family-name'
        }))
    contact_organization = forms.CharField(
        max_length=100,
        required=False,
        widget=forms.TextInput(attrs={
            'class': 'singleLine',
            'autocomplete': 'organization'
        }))
    contact_email = forms.EmailField(
        max_length=100,
        widget=forms.EmailInput(attrs={
            'class': 'singleLine',
            'autocomplete': 'email'
        }))
    contact_number = forms.RegexField(
        max_length=100,
        regex=r'^\+?1?[^A-Za-z]{9,15}$',
        error_messages=(
            {"invalid": "Please enter a valid phone Number for Example:'+64 22 1234567'"}),
        widget=forms.TextInput(attrs={
            'class': 'singleLine',
            'autocomplete': 'tel-national'
        }))
    contact_description = forms.CharField(
        widget=forms.Textarea(attrs={
            'class': 'multiLine',
            'cols': '60',
            'rows': '9',
        }))

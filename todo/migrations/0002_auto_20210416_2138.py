# Generated by Django 3.1.3 on 2021-04-16 12:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='due_date',
            field=models.DateField(help_text='투두 마감일을 나타냅니다.', verbose_name='투두 마감일'),
        ),
    ]

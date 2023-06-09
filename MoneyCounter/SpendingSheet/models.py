from django.db import models


class Entry(models.Model):
    spent = models.DecimalField(decimal_places=2, max_digits=15)
    category = models.ForeignKey('EntryCategory', on_delete=models.PROTECT, null=True, blank=True)
    content = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    period_of_execution = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.content


class EntryCategory(models.Model):
    title = models.CharField(max_length=50)
    describe = models.CharField(max_length=150, null=True, blank=True)
    color = models.CharField(max_length=7, null=True, blank=True)

    def __str__(self):
        return self.title
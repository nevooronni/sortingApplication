from rest_framework import serializers#module from rest package

class DictSerializer(serializers.Serializer):
		dictionary = {'34': 'thirty-four', '90': 'ninety','91': 'ninety-one','21': 'twenty-one','61': 'sixty-one', '9': 'nine','2': 'two', '6': 'six', '3': 'three ','8': 'eight', '80': 'eighty', '81': 'eighty-one','Ninety-Nine':  '99', 'nine-hundred':  '900'}



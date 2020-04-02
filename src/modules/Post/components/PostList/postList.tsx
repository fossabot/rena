import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { tw } from 'react-native-tailwindcss'

import { Props, PostListModel } from './postList.contracts'

import { 
  View, 
  Text,
  StyleSheet
} from 'react-native'

import { Loading } from 'atoms'
import { Card } from 'molecules'

import { typography } from '@/styles'

export default function PostList ({ withAuthor, data }: Props) {
  const navigation = useNavigation()
  
  return (
    <View>
      {data.isFetching ? (
        <Loading />
      ) : (
        data.data.map((item: PostListModel) => (
          <Card 
            key={`post-${item.id}`}
            style={[tw.mB4]}
          >
            <React.Fragment>
              <Text 
                style={[styles.title]}
                onPress={() => navigation.navigate('post.detail', {
                  postId: item.id
                })}
              >
                {item.title}
              </Text>

              {withAuthor && item.author ? (
                <Text>
                  Written by

                  <Text
                    style={[tw.textBlue500]}
                    onPress={() => navigation.navigate('post.author', {
                      userId: item.userId
                    })}
                  >
                    {' ' + item.author.name}
                  </Text>
                </Text>
              ) : (
                null
              )}

              <Text style={[tw.mT3]}>
                {item.body}
              </Text>
            </React.Fragment>
          </Card>
        ))
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: typography.lato.bold,
    ...tw.textBase
  }
})
